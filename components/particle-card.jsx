"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function ParticleCard({ icon: Icon, title, description }) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationFrameRef = useRef(null)
  const cardRef = useRef(null)
  const wavesRef = useRef([])
  const flowFieldRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * 2
    canvas.height = rect.height * 2
    ctx.scale(2, 2)

    // Initialize flow field for organic movement
    const flowFieldSize = 20
    flowFieldRef.current = Array.from({ length: flowFieldSize }, (_, y) =>
      Array.from({ length: flowFieldSize }, (_, x) => ({
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.01,
      }))
    )

    // Initialize particles with more properties
    const particleCount = 60
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * 2.5,
      vy: (Math.random() - 0.5) * 2.5,
      radius: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
      hue: Math.random() * 30 + 250,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.05 + 0.02,
      orbitRadius: Math.random() * 30 + 20,
      orbitSpeed: (Math.random() - 0.5) * 0.03,
      orbitAngle: Math.random() * Math.PI * 2,
      trail: [],
      energy: Math.random() * 0.5 + 0.5,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)

      if (isHovered) {
        const time = Date.now() * 0.001

        // Update flow field
        flowFieldRef.current.forEach((row, y) => {
          row.forEach((cell, x) => {
            cell.angle += cell.speed
          })
        })

        // Update and draw waves
        wavesRef.current = wavesRef.current.filter((wave) => {
          wave.radius += wave.speed
          wave.opacity -= 0.02
          
          if (wave.opacity > 0) {
            ctx.strokeStyle = `hsla(270, 80%, 60%, ${wave.opacity * 0.3})`
            ctx.lineWidth = 3
            ctx.beginPath()
            ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2)
            ctx.stroke()

            ctx.strokeStyle = `hsla(280, 90%, 70%, ${wave.opacity * 0.2})`
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.arc(wave.x, wave.y, wave.radius + 5, 0, Math.PI * 2)
            ctx.stroke()
            
            return true
          }
          return false
        })

        particlesRef.current.forEach((particle, i) => {
          // Apply wave forces
          wavesRef.current.forEach((wave) => {
            const dx = particle.x - wave.x
            const dy = particle.y - wave.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const waveDist = Math.abs(distance - wave.radius)
            
            if (waveDist < 30) {
              const force = (1 - waveDist / 30) * wave.force
              particle.vx += (dx / distance) * force
              particle.vy += (dy / distance) * force
              particle.energy = Math.min(particle.energy + 0.1, 1)
            }
          })

          // Flow field influence
          const flowX = Math.floor((particle.x / rect.width) * (flowFieldRef.current[0].length - 1))
          const flowY = Math.floor((particle.y / rect.height) * (flowFieldRef.current.length - 1))
          if (flowFieldRef.current[flowY] && flowFieldRef.current[flowY][flowX]) {
            const flow = flowFieldRef.current[flowY][flowX]
            particle.vx += Math.cos(flow.angle) * 0.1
            particle.vy += Math.sin(flow.angle) * 0.1
          }

          // Mouse attraction force
          const dx = mousePos.x - particle.x
          const dy = mousePos.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const force = Math.min(100 / (distance + 1), 2)
          
          particle.vx += (dx / distance) * force * 0.01
          particle.vy += (dy / distance) * force * 0.01

          // Add orbital motion around mouse
          particle.orbitAngle += particle.orbitSpeed
          const orbitX = Math.cos(particle.orbitAngle) * particle.orbitRadius * 0.1
          const orbitY = Math.sin(particle.orbitAngle) * particle.orbitRadius * 0.1
          
          // Update position with damping
          particle.vx *= 0.95
          particle.vy *= 0.95
          
          // Store trail position
          particle.trail.push({ x: particle.x, y: particle.y, opacity: 1 })
          if (particle.trail.length > 15) particle.trail.shift()
          
          particle.x += particle.vx + orbitX
          particle.y += particle.vy + orbitY
          
          // Energy decay
          particle.energy *= 0.98

          // Bounce off edges with energy loss
          if (particle.x < 0 || particle.x > rect.width) {
            particle.vx *= -0.8
            particle.x = Math.max(0, Math.min(rect.width, particle.x))
          }
          if (particle.y < 0 || particle.y > rect.height) {
            particle.vy *= -0.8
            particle.y = Math.max(0, Math.min(rect.height, particle.y))
          }

          // Draw particle trail
          particle.trail.forEach((point, index) => {
            const trailOpacity = (index / particle.trail.length) * 0.3 * particle.energy
            const trailRadius = particle.radius * (0.5 + (index / particle.trail.length) * 0.5)
            
            const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, trailRadius * 2)
            gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 65%, ${trailOpacity})`)
            gradient.addColorStop(1, `hsla(${particle.hue + 20}, 70%, 70%, 0)`)
            
            ctx.fillStyle = gradient
            ctx.beginPath()
            ctx.arc(point.x, point.y, trailRadius * 2, 0, Math.PI * 2)
            ctx.fill()
          })

          // Pulsing effect
          particle.pulsePhase += particle.pulseSpeed
          const pulse = Math.sin(particle.pulsePhase) * 0.5 + 0.5
          const energyBoost = particle.energy * 0.3
          const currentRadius = particle.radius * (1 + pulse * 0.5 + energyBoost)
          const currentOpacity = particle.opacity * (0.7 + pulse * 0.3 + energyBoost)

          // Dynamic color based on speed and position
          const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
          const hueShift = Math.min(speed * 5, 30) + particle.energy * 20
          const hue = particle.hue + hueShift
          const saturation = 70 + pulse * 20 + particle.energy * 15
          const lightness = 55 + pulse * 10 + particle.energy * 10

          // Draw particle with enhanced gradient
          const gradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            currentRadius * 3
          )
          gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${currentOpacity})`)
          gradient.addColorStop(0.4, `hsla(${hue}, ${saturation}%, ${lightness + 10}%, ${currentOpacity * 0.6})`)
          gradient.addColorStop(0.7, `hsla(${hue + 10}, ${saturation - 10}%, ${lightness + 15}%, ${currentOpacity * 0.3})`)
          gradient.addColorStop(1, `hsla(${hue + 20}, ${saturation - 20}%, ${lightness + 20}%, 0)`)

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, currentRadius * 3, 0, Math.PI * 2)
          ctx.fill()

          // Draw glow core with energy burst
          if (particle.energy > 0.7) {
            const burstGradient = ctx.createRadialGradient(
              particle.x,
              particle.y,
              0,
              particle.x,
              particle.y,
              currentRadius * 5
            )
            burstGradient.addColorStop(0, `hsla(${hue}, 100%, 80%, ${particle.energy * 0.4})`)
            burstGradient.addColorStop(0.5, `hsla(${hue + 10}, 90%, 75%, ${particle.energy * 0.2})`)
            burstGradient.addColorStop(1, `hsla(${hue + 20}, 80%, 70%, 0)`)
            ctx.fillStyle = burstGradient
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, currentRadius * 5, 0, Math.PI * 2)
            ctx.fill()
          }

          ctx.fillStyle = `hsla(${hue}, 90%, 70%, ${currentOpacity * 0.8})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, currentRadius * 0.5, 0, Math.PI * 2)
          ctx.fill()

          // Draw connections with enhanced effects
          particlesRef.current.forEach((otherParticle, j) => {
            if (i >= j) return

            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              const connectionStrength = 1 - distance / 100
              const lineOpacity = connectionStrength * 0.3
              
              // Animated gradient line
              const gradient = ctx.createLinearGradient(
                particle.x,
                particle.y,
                otherParticle.x,
                otherParticle.y
              )
              gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 60%, ${lineOpacity})`)
              gradient.addColorStop(0.5, `hsla(${(particle.hue + otherParticle.hue) / 2}, 80%, 65%, ${lineOpacity * 1.5})`)
              gradient.addColorStop(1, `hsla(${otherParticle.hue}, 70%, 60%, ${lineOpacity})`)

              ctx.strokeStyle = gradient
              ctx.lineWidth = connectionStrength * 2
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()

              // Draw connection nodes
              if (distance < 50) {
                const midX = (particle.x + otherParticle.x) / 2
                const midY = (particle.y + otherParticle.y) / 2
                ctx.fillStyle = `hsla(270, 80%, 70%, ${connectionStrength * 0.4})`
                ctx.beginPath()
                ctx.arc(midX, midY, connectionStrength * 2, 0, Math.PI * 2)
                ctx.fill()
              }
            }
          })
        })

        // Draw mouse influence area
        if (mousePos.x > 0 && mousePos.y > 0) {
          const gradient = ctx.createRadialGradient(mousePos.x, mousePos.y, 0, mousePos.x, mousePos.y, 80)
          gradient.addColorStop(0, "rgba(139, 92, 246, 0.1)")
          gradient.addColorStop(0.5, "rgba(167, 139, 250, 0.05)")
          gradient.addColorStop(1, "rgba(196, 181, 253, 0)")
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(mousePos.x, mousePos.y, 80, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isHovered])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleClick = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const clickY = e.clientY - rect.top
    
    // Create wave propagation
    wavesRef.current.push({
      x: clickX,
      y: clickY,
      radius: 0,
      speed: 4,
      opacity: 1,
      force: 0.8,
    })

    // Energize nearby particles
    particlesRef.current.forEach((particle) => {
      const dx = particle.x - clickX
      const dy = particle.y - clickY
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < 100) {
        particle.energy = 1
      }
    })
  }

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-lg group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePos({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-700"
        style={{ opacity: isHovered ? 1 : 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <Card className="relative bg-white/80 backdrop-blur-sm border-violet-200 hover:border-violet-400 hover:shadow-2xl hover:shadow-violet-300/60 transition-all duration-700 hover:scale-[1.08] hover:-translate-y-1">
        <CardContent className="p-6 relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-violet-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Icon className="h-8 w-8 mb-4 text-violet-600 transition-all duration-500 group-hover:text-violet-700 group-hover:scale-110 group-hover:rotate-6 relative z-10" />
          </div>
          <h3 className="font-bold mb-2 text-violet-900 group-hover:text-violet-800 transition-colors duration-300">{title}</h3>
          <p className="text-sm text-violet-700 group-hover:text-violet-600 transition-colors duration-300">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}
