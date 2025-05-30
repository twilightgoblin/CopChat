'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import Cookies from 'js-cookie';
import Image from 'next/image';
import { LogOut, Trash2 } from 'lucide-react';

// List of all taluks in Chikkaballapura district
const TALUKS = [
    "Chikkaballapura Town",
    "Chikkaballapura Rural",
    "Chintamani Town",
    "Chintamani Rural",
    "Gauribidanuru Town",
    "Gauribidanuru Rural",
    "Gudibande",
    "Shidlaghatta Town",
    "Shidlaghatta Rural",
    "Batlahalli",
    "Kencharalahalli",
    "Pathapalya",
    "Manchenahalli",
    "Chelur",
    "Nandi Hills",
    "Dibburahalli"
];

export default function BeatPoliceAdmin() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [beatPolice, setBeatPolice] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [selectedOfficer, setSelectedOfficer] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        taluk: '',
        village: '',
        contactNumber: '',
    });

    useEffect(() => {
        // Check if user is authenticated
        const auth = Cookies.get("adminAuthenticated");
        if (!auth) {
            router.push("/admin/login");
        } else {
            setIsAuthenticated(true);
            fetchBeatPolice();
        }
    }, [router]);

    const fetchBeatPolice = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/beat-police');
            const data = await response.json();
            setBeatPolice(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching beat police:', error);
            toast.error('Failed to fetch beat police data');
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
            // First, check if an officer already exists for this taluk and village
            const existingOfficers = await fetch('http://localhost:5001/api/beat-police').then(res => res.json());
            const existingOfficer = existingOfficers.find(o => 
                o.taluk === formData.taluk && o.village === formData.village
            );

            let response;
            if (existingOfficer) {
                // If officer exists, update them
                response = await fetch(`http://localhost:5001/api/beat-police/${existingOfficer._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                toast.success('Beat police officer updated successfully');
            } else {
                // If no officer exists, create new one
                response = await fetch('http://localhost:5001/api/beat-police', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                toast.success('Beat police officer added successfully');
            }

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to save beat police officer');
            }

            setIsDialogOpen(false);
            setFormData({
                name: '',
                designation: '',
                taluk: '',
                village: '',
                contactNumber: '',
            });
            fetchBeatPolice();
        } catch (error) {
            console.error('Error saving beat police:', error);
            toast.error(error.message || 'Failed to save beat police officer');
        }
    };

    const handleDeleteClick = (officer) => {
        setSelectedOfficer(officer);
        setIsDeleteDialogOpen(true);
    };

    const handleDelete = async () => {
        if (!selectedOfficer) return;

        try {
            const response = await fetch(`http://localhost:5001/api/beat-police/${selectedOfficer._id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete beat police officer');
            }

            toast.success('Beat police officer deleted successfully');
            fetchBeatPolice();
        } catch (error) {
            console.error('Error deleting beat police:', error);
            toast.error('Failed to delete beat police officer');
        } finally {
            setIsDeleteDialogOpen(false);
            setSelectedOfficer(null);
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
                    <h1 className="text-4xl font-bold text-violet-900 text-center">Beat Police Management</h1>
                    <p className="text-violet-600 mt-2 text-center">Chikkaballapura Police Department</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-semibold text-violet-900">Manage Beat Police Officers</h2>
                        <div className="flex space-x-4">
                            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button>Add/Update Beat Police Officer</Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                    <DialogHeader>
                                        <DialogTitle>Add/Update Beat Police Officer</DialogTitle>
                                    </DialogHeader>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Name</label>
                                                <Input
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Designation</label>
                                                <Input
                                                    name="designation"
                                                    value={formData.designation}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Taluk</label>
                                                <Select
                                                    value={formData.taluk}
                                                    onValueChange={(value) => handleSelectChange('taluk', value)}
                                                    required
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select taluk" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {TALUKS.map((taluk) => (
                                                            <SelectItem key={taluk} value={taluk}>
                                                                {taluk}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Village</label>
                                                <Input
                                                    name="village"
                                                    value={formData.village}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Contact Number</label>
                                                <Input
                                                    name="contactNumber"
                                                    value={formData.contactNumber}
                                                    onChange={handleInputChange}
                                                    required
                                                    pattern="[0-9]{10}"
                                                    title="Please enter a valid 10-digit phone number"
                                                />
                                            </div>
                                        </div>
                                        <Button type="submit" className="w-full">Save Officer</Button>
                                    </form>
                                </DialogContent>
                            </Dialog>
                            <button
                                onClick={handleLogout}
                                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                <LogOut className="h-5 w-5" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="text-center">Loading...</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Designation</TableHead>
                                        <TableHead>Taluk</TableHead>
                                        <TableHead>Village</TableHead>
                                        <TableHead>Contact</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {beatPolice.map((officer) => (
                                        <TableRow key={officer._id}>
                                            <TableCell>{officer.name}</TableCell>
                                            <TableCell>{officer.designation}</TableCell>
                                            <TableCell>{officer.taluk}</TableCell>
                                            <TableCell>{officer.village}</TableCell>
                                            <TableCell>{officer.contactNumber}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() => handleDeleteClick(officer)}
                                                    className="flex items-center space-x-1"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                    <span>Delete</span>
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </div>
            </div>

            {/* Delete Confirmation Dialog */}
            <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the beat police officer
                            {selectedOfficer && ` ${selectedOfficer.name} (${selectedOfficer.contactNumber})`}.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDelete}
                            className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
} 