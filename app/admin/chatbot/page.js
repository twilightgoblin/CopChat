"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { mainOptions } from '@/data/options';

export default function ChatbotAdmin() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [formData, setFormData] = useState({
    label: '',
    value: '',
    keywords: '',
    info: '',
    category: '',
  });
  const [chatbotOptions, setChatbotOptions] = useState([]);

  useEffect(() => {
    // Check if user is authenticated
    const auth = Cookies.get("adminAuthenticated");
    if (!auth) {
      router.push("/admin/login");
    } else {
      setIsAuthenticated(true);
      fetchChatbotOptions();
    }
  }, [router]);

  const fetchChatbotOptions = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/chatbot');
      const data = await response.json();
      setChatbotOptions(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching chatbot options:', error);
      toast.error('Failed to fetch chatbot options');
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert keywords string to array
      const keywords = formData.keywords.split(',').map(k => k.trim());
      
      const optionData = {
        label: formData.label,
        value: formData.value.toLowerCase().replace(/\s+/g, '-'),
        keywords,
        info: formData.info,
        category: formData.category,
      };

      let response;
      if (selectedCategory) {
        // Update existing option
        response = await fetch(`http://localhost:5001/api/chatbot/${selectedCategory._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(optionData),
        });
        toast.success('Chatbot option updated successfully');
      } else {
        // Create new option
        response = await fetch('http://localhost:5001/api/chatbot', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(optionData),
        });
        toast.success('Chatbot option added successfully');
      }

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to save chatbot option');
      }

      setIsDialogOpen(false);
      setSelectedCategory(null);
      setFormData({
        label: '',
        value: '',
        keywords: '',
        info: '',
        category: '',
      });
      fetchChatbotOptions();
    } catch (error) {
      console.error('Error saving chatbot option:', error);
      toast.error(error.message || 'Failed to save chatbot option');
    }
  };

  const handleEdit = (option) => {
    setSelectedCategory(option);
    setFormData({
      label: option.label,
      value: option.value,
      keywords: option.keywords.join(', '),
      info: option.info?.props?.children?.props?.children || '',
      category: option.category || '',
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (option) => {
    if (window.confirm('Are you sure you want to delete this option?')) {
      try {
        const response = await fetch(`http://localhost:5001/api/chatbot/${option._id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to delete chatbot option');
        }

        toast.success('Chatbot option deleted successfully');
        fetchChatbotOptions();
      } catch (error) {
        console.error('Error deleting chatbot option:', error);
        toast.error(error.message || 'Failed to delete chatbot option');
      }
    }
  };

  const handleLogout = () => {
    Cookies.remove("adminAuthenticated");
    router.push("/admin/login");
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-violet-900 text-center">Chatbot Management</h1>
          <p className="text-violet-600 mt-2 text-center">Manage chatbot options and responses</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-violet-900">Manage Chatbot Options</h2>
            <div className="flex space-x-4">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Option
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      {selectedCategory ? 'Edit Chatbot Option' : 'Add New Chatbot Option'}
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Label</label>
                        <Input
                          name="label"
                          value={formData.label}
                          onChange={handleInputChange}
                          required
                          placeholder="Display text for the option"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Value</label>
                        <Input
                          name="value"
                          value={formData.value}
                          onChange={handleInputChange}
                          required
                          placeholder="Unique identifier"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Category</label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => handleSelectChange('category', value)}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {mainOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Keywords</label>
                        <Input
                          name="keywords"
                          value={formData.keywords}
                          onChange={handleInputChange}
                          required
                          placeholder="Comma-separated keywords"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Information</label>
                      <Textarea
                        name="info"
                        value={formData.info}
                        onChange={handleInputChange}
                        required
                        placeholder="Information to display when selected"
                        className="min-h-[200px]"
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsDialogOpen(false);
                          setSelectedCategory(null);
                          setFormData({
                            label: '',
                            value: '',
                            keywords: '',
                            info: '',
                            category: '',
                          });
                        }}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="flex items-center gap-2">
                        <Save className="h-4 w-4" />
                        Save
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <X className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="space-y-8">
              {mainOptions.map((category) => {
                const categoryOptions = chatbotOptions.filter(opt => opt.category === category.value);
                return (
                  <div key={category.value} className="space-y-4">
                    <h3 className="text-xl font-semibold text-violet-800">{category.label}</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Label</TableHead>
                            <TableHead>Value</TableHead>
                            <TableHead>Keywords</TableHead>
                            <TableHead>Information</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {categoryOptions.map((option) => (
                            <TableRow key={option._id}>
                              <TableCell>{option.label}</TableCell>
                              <TableCell>{option.value}</TableCell>
                              <TableCell>{option.keywords.join(', ')}</TableCell>
                              <TableCell className="max-w-md truncate">
                                {typeof option.info === 'string' 
                                  ? option.info 
                                  : 'Rich content'}
                              </TableCell>
                              <TableCell>
                                <div className="flex space-x-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleEdit(option)}
                                    className="flex items-center gap-1"
                                  >
                                    <Edit2 className="h-4 w-4" />
                                    Edit
                                  </Button>
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => handleDelete(option)}
                                    className="flex items-center gap-1"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                    Delete
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 