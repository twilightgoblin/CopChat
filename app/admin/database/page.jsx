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

const SERVICE_TYPES = [
  { key: 'lost-and-found', label: 'Lost and Found' },
  { key: 'senior-citizen', label: 'Senior Citizen' },
  { key: 'women-companion', label: 'Women Companion' },
  { key: 'locked-house-monitoring', label: 'Locked House Monitoring' },
  { key: 'loud-speaker', label: 'Loud Speaker' },
  { key: 'anonymous-complaint', label: 'Anonymous Complaint' },
];

export default function DatabasePortal() {
  const [serviceType, setServiceType] = useState(SERVICE_TYPES[0].key);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [serviceType]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:5001/api/service-forms/${serviceType}`);
      if (!res.ok) throw new Error('Failed to fetch data');
      const json = await res.json();
      setData(json);
    } catch (err) {
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
    if (!deleteId) return;
    try {
      const res = await fetch(`http://localhost:5001/api/service-forms/${serviceType}/${deleteId}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete entry');
      setData(data.filter((item) => item._id !== deleteId));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsDeleteDialogOpen(false);
      setDeleteId(null);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Database Portal</h1>
      <div className="mb-4">
        <label className="mr-2 font-semibold">Service Type:</label>
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="border rounded px-2 py-1"
        >
          {SERVICE_TYPES.map((type) => (
            <option key={type.key} value={type.key}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border">
            <thead>
              <tr>
                {data[0] &&
                  Object.keys(data[0])
                    .filter((key) => key !== '__v')
                    .map((key) => (
                      <th key={key} className="border px-2 py-1 text-left">
                        {key}
                      </th>
                    ))}
                <th className="border px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  {Object.keys(item)
                    .filter((key) => key !== '__v')
                    .map((key) => (
                      <td key={key} className="border px-2 py-1">
                        {typeof item[key] === 'object' && item[key] !== null
                          ? JSON.stringify(item[key])
                          : String(item[key])}
                      </td>
                    ))}
                  <td className="border px-2 py-1">
                    <button
                      onClick={() => handleDeleteClick(item._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {data.length === 0 && <div className="mt-4">No data found.</div>}
        </div>
      )}
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the entry from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
              autoFocus
            >
              Delete
            </AlertDialogAction>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
} 