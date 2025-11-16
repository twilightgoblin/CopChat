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
import { API_ENDPOINTS } from "@/utils/api"

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
      const response = await fetch('/api/updates')
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
      const response = await fetch('/api/updates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          category,
          isImportant,
          active: true
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to add update')
      }

      setNotificationMessage("✅ Update added successfully!")
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
    if (!confirm('Are you sure you want to delete this update?')) {
      return
    }

    try {
      const response = await fetch(`/api/updates?id=${id}`, {
        method: 'DELETE'
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to delete update')
      }

      setNotificationMessage("✅ Update deleted successfully!")
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
                className={notificationType === 'success' ? 'bg-green-100 border-green-500 text-green-800' : ''}
              />
            )}

            {/* Add Update Form */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">Add New Update</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter update title"
                        required
                        className="text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger id="category" className="text-base">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Announcement">📢 Announcement</SelectItem>
                          <SelectItem value="Event">📅 Event</SelectItem>
                          <SelectItem value="News">📰 News</SelectItem>
                          <SelectItem value="Alert">⚠️ Alert</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Enter update content"
                      required
                      className="min-h-[120px] text-base"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-violet-50 rounded-lg">
                    <input
                      type="checkbox"
                      id="isImportant"
                      checked={isImportant}
                      onChange={(e) => setIsImportant(e.target.checked)}
                      className="h-5 w-5 text-violet-600 rounded focus:ring-violet-500"
                    />
                    <Label htmlFor="isImportant" className="text-base cursor-pointer">
                      🔥 Mark as Important (will be highlighted on homepage)
                    </Label>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-violet-600 hover:bg-violet-700 text-base px-8 py-6"
                  >
                    {isSubmitting ? "Adding Update..." : "✨ Add Update"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Updates List */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl">All Updates ({updates.length})</CardTitle>
                  <span className="text-sm text-gray-500">
                    Showing all updates from database
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                {updates.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📭</div>
                    <p className="text-gray-500 text-lg">No updates yet. Create your first update above!</p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                    {updates.map((update) => (
                      <div
                        key={update._id}
                        className={`p-5 rounded-xl border-2 transition-all hover:shadow-lg ${
                          update.isImportant 
                            ? 'bg-gradient-to-r from-red-50 to-orange-50 border-red-300 shadow-md' 
                            : 'bg-white border-gray-200 hover:border-violet-300'
                        }`}
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-2">
                              {update.isImportant && (
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                  IMPORTANT
                                </span>
                              )}
                              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                update.category === 'Alert' ? 'bg-yellow-100 text-yellow-700' :
                                update.category === 'Event' ? 'bg-blue-100 text-blue-700' :
                                update.category === 'News' ? 'bg-green-100 text-green-700' :
                                'bg-violet-100 text-violet-700'
                              }`}>
                                {update.category}
                              </span>
                            </div>
                            
                            <h3 className="font-bold text-xl text-gray-900 mb-2">{update.title}</h3>
                            
                            <p className="text-gray-700 mb-3 leading-relaxed">{update.content}</p>
                            
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>📅 {new Date(update.date).toLocaleDateString('en-IN', { 
                                day: 'numeric', 
                                month: 'long', 
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}</span>
                              <span className={`px-2 py-1 rounded ${update.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                {update.active ? '✓ Active' : '✗ Inactive'}
                              </span>
                            </div>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(update._id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 flex-shrink-0"
                            title="Delete update"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 