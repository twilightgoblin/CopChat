"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Notification } from "@/components/ui/notification"
import { Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Shield, LogOut } from "lucide-react"
import Cookies from "js-cookie"

export default function AdminUpdates() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [updates, setUpdates] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("Announcement")
  const [isImportant, setIsImportant] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [notificationType, setNotificationType] = useState("success")

  useEffect(() => {
    // Check if user is authenticated
    const auth = Cookies.get("adminAuthenticated")
    if (!auth) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  useEffect(() => {
    fetchUpdates()
  }, [])

  const fetchUpdates = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/updates')
      if (!response.ok) throw new Error('Failed to fetch updates')
      const data = await response.json()
      setUpdates(data)
    } catch (error) {
      console.error('Error fetching updates:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:5001/api/updates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          category,
          isImportant
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to add update')
      }

      setNotificationMessage("Update added successfully!")
      setNotificationType("success")
      setShowNotification(true)

      // Reset form
      setTitle("")
      setContent("")
      setCategory("Announcement")
      setIsImportant(false)

      // Refresh updates
      fetchUpdates()

      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false)
      }, 3000)
    } catch (error) {
      setNotificationMessage(error.message)
      setNotificationType("error")
      setShowNotification(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/api/updates/${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        throw new Error('Failed to delete update')
      }

      setNotificationMessage("Update deleted successfully!")
      setNotificationType("success")
      setShowNotification(true)

      // Refresh updates
      fetchUpdates()

      // Hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false)
      }, 3000)
    } catch (error) {
      setNotificationMessage(error.message)
      setNotificationType("error")
      setShowNotification(true)
    }
  }

  const handleLogout = () => {
    Cookies.remove("adminAuthenticated")
    router.push("/admin/login")
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* Header with Logo */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative w-24 h-24 mb-4">
            <Image
              src="/images/karnataka-state-emblem.png"
              alt="Karnataka State Police Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-violet-900 text-center">Admin Dashboard</h1>
          <p className="text-violet-600 mt-2 text-center">Chikkaballapura Police Department</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-violet-900">Updates Management</h2>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>

          <div className="space-y-6">
            {/* Add your admin functionality here */}
            <div className="p-4 bg-violet-50 rounded-lg">
              <p className="text-gray-700">
                Welcome to the admin dashboard. This is where you can manage updates and content for the Chikkaballapura Police Department website.
              </p>
            </div>

            {showNotification && (
              <Notification
                message={notificationMessage}
                type={notificationType}
                onClose={() => setShowNotification(false)}
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Add Update Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Add New Update</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Announcement">Announcement</SelectItem>
                          <SelectItem value="Event">Event</SelectItem>
                          <SelectItem value="News">News</SelectItem>
                          <SelectItem value="Alert">Alert</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="isImportant"
                        checked={isImportant}
                        onChange={(e) => setIsImportant(e.target.checked)}
                        className="h-4 w-4 text-violet-600"
                      />
                      <Label htmlFor="isImportant">Mark as Important</Label>
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-violet-600 hover:bg-violet-700"
                    >
                      {isSubmitting ? "Adding..." : "Add Update"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Updates List */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {updates.map((update) => (
                      <div
                        key={update._id}
                        className={`p-4 rounded-lg border ${
                          update.isImportant ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">{update.title}</h3>
                            <p className="text-sm text-gray-500">
                              {new Date(update.date).toLocaleDateString()} - {update.category}
                            </p>
                            <p className="mt-2 text-gray-700">{update.content}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(update._id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 