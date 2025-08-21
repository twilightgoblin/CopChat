'use client';
import React, { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Notification } from "@/components/ui/notification";
import { API_ENDPOINTS, getApiUrl } from "@/utils/api";

const SERVICE_TYPES = [
  { key: 'lost-and-found', label: 'Lost and Found' },
  { key: 'senior-citizen', label: 'Senior Citizen' },
  { key: 'women-companion', label: 'Women Companion' },
  { key: 'locked-house-monitoring', label: 'Locked House Monitoring' },
  { key: 'loud-speaker', label: 'Loud Speaker' },
  { key: 'anonymous-complaint', label: 'Anonymous Complaint' },
  { key: 'testimonials', label: 'Testimonials' },
];

export default function DatabasePortal() {
  const [serviceType, setServiceType] = useState(SERVICE_TYPES[0].key);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("success");
  const resolveFileUrl = (filePath) => {
    if (!filePath) return '';
    if (filePath.startsWith('http://') || filePath.startsWith('https://')) return filePath;
    return `${getApiUrl()}${filePath}`;
  };

  useEffect(() => {
    fetchData();
  }, [serviceType]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = serviceType === 'testimonials'
        ? API_ENDPOINTS.admin.testimonialsList
        : API_ENDPOINTS.admin.serviceFormsList(serviceType);
      console.log('Fetching data from:', endpoint);
      const res = await fetch(endpoint, { credentials: 'include' });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to fetch data');
      }
      const result = await res.json();
      console.log('Fetched data:', result);
      setData(result);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setIsDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    try {
      const endpoint = serviceType === 'testimonials'
        ? API_ENDPOINTS.admin.testimonialsDelete(deleteId)
        : API_ENDPOINTS.admin.serviceFormsDelete(serviceType, deleteId);
      const res = await fetch(endpoint, { method: 'DELETE', credentials: 'include' });
      if (!res.ok) throw new Error('Failed to delete');
      await fetchData();
      setShowNotification(true);
      setNotificationMessage("Item deleted successfully");
      setNotificationType("success");
    } catch (err) {
      setShowNotification(true);
      setNotificationMessage(err.message);
      setNotificationType("error");
    } finally {
      setIsDeleteDialogOpen(false);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      console.log('Updating testimonial status:', { id, newStatus });
      const res = await fetch(API_ENDPOINTS.admin.testimonialsUpdateStatus(id), {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
        credentials: 'include'
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to update status');
      }

      const updatedTestimonial = await res.json();
      console.log('Status update response:', updatedTestimonial);

      // Immediately update the local state
      setData(prevData => 
        prevData.map(item => 
          item._id === id ? { ...item, status: newStatus } : item
        )
      );

      setShowNotification(true);
      setNotificationMessage(`Testimonial ${newStatus} successfully`);
      setNotificationType("success");

      // Refetch data to ensure we have the latest state
      await fetchData();
    } catch (err) {
      console.error('Error updating testimonial:', err);
      setShowNotification(true);
      setNotificationMessage(err.message || 'Failed to update testimonial status');
      setNotificationType("error");
    }
  };

  const renderStars = (count) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
        />
      ));
  };

  const renderTestimonialActions = (testimonial) => {
    return (
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          className="bg-red-50 text-red-700 hover:bg-red-100"
          onClick={() => handleDeleteClick(testimonial._id)}
        >
          Delete
        </Button>
      </div>
    );
  };

  const renderTestimonialStatus = (status) => {
    // Default to 'pending' if status is undefined
    const currentStatus = status || 'pending';
    const statusStyles = {
      pending: "bg-yellow-100 text-yellow-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[currentStatus] || statusStyles.pending}`}>
        {currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}
      </span>
    );
  };

  const renderActions = (item) => {
    if (serviceType === 'testimonials') {
      return renderTestimonialActions(item);
    }
    return (
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          className="bg-red-50 text-red-700 hover:bg-red-100"
          onClick={() => handleDeleteClick(item._id)}
        >
          Delete
        </Button>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {showNotification && (
        <Notification
          message={notificationMessage}
          type={notificationType}
          onClose={() => setShowNotification(false)}
        />
      )}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Database Management</h1>
        <div className="flex flex-wrap gap-2">
          {SERVICE_TYPES.map((type) => (
            <Button
              key={type.key}
              variant={serviceType === type.key ? "default" : "outline"}
              onClick={() => setServiceType(type.key)}
              className="mb-2"
            >
              {type.label}
            </Button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : error ? (
        <div className="text-center py-8 text-red-600">{error}</div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {serviceType === 'testimonials' ? (
                    <>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </>
                  ) : (
                    <>
                      {data[0] &&
                        Object.keys(data[0])
                          .filter((key) => !['__v', '_id'].includes(key))
                          .map((key) => (
                            <th key={key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </th>
                          ))}
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((item) => (
                  <tr key={item._id}>
                    {serviceType === 'testimonials' ? (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-2xl whitespace-pre-wrap break-words">{item.content}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex">{renderStars(item.rating)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {renderActions(item)}
                        </td>
                      </>
                    ) : (
                      <>
                        {Object.keys(item)
                          .filter((key) => !['__v', '_id'].includes(key))
                          .map((key) => (
                            <td key={key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {(() => {
                                const value = item[key];
                                if ((key === 'image' || key.toLowerCase().includes('image')) && typeof value === 'string' && value) {
                                  const url = resolveFileUrl(value);
                                  return (
                                    <a href={url} target="_blank" rel="noopener noreferrer">
                                      <img src={url} alt="uploaded" className="h-12 w-12 object-cover rounded border" />
                                    </a>
                                  );
                                }
                                if ((key === 'additionalFiles' || key === 'evidence') && Array.isArray(value) && value.length > 0) {
                                  const filesToShow = value.slice(0, 3);
                                  return (
                                    <div className="flex items-center gap-2 flex-wrap">
                                      {filesToShow.map((file, idx) => {
                                        const url = resolveFileUrl(file);
                                        const isImage = /\.(png|jpe?g|gif|webp|bmp|svg)$/i.test(file);
                                        return isImage ? (
                                          <a key={idx} href={url} target="_blank" rel="noopener noreferrer">
                                            <img src={url} alt={`file-${idx}`} className="h-10 w-10 object-cover rounded border" />
                                          </a>
                                        ) : (
                                          <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                            File
                                          </a>
                                        );
                                      })}
                                      {value.length > 3 && (
                                        <span className="text-xs text-gray-400">+{value.length - 3} more</span>
                                      )}
                                    </div>
                                  );
                                }
                                if (typeof value === 'object' && value !== null) {
                                  return JSON.stringify(value);
                                }
                                if (key === 'createdAt' || key === 'updatedAt') {
                                  return value ? new Date(value).toLocaleDateString() : '';
                                }
                                return String(value);
                              })()}
                            </td>
                          ))}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {renderActions(item)}
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the selected item.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-red-600 hover:bg-red-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
} 