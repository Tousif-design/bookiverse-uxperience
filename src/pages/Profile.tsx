import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Profile = () => {
  const { toast } = useToast();
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    field: "",
    bio: "",
    avatar: "/placeholder.svg",
    gender: "other",
  });

  const handleSave = () => {
    console.log("Saving profile:", profileData);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleAvatarChange = () => {
    // This would typically open a file picker
    console.log("Changing avatar");
    const avatarUrl = profileData.gender === "female" 
      ? "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      : "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952";
    
    setProfileData(prev => ({
      ...prev,
      avatar: avatarUrl
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-serif font-bold text-primary mb-8">Profile Settings</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          {/* Avatar Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src={profileData.avatar} />
                <AvatarFallback>
                  {profileData.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-0 right-0 rounded-full"
                onClick={handleAvatarChange}
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Profile Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profileData.name}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profileData.email}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="field">Field of Study</Label>
              <Select
                value={profileData.field}
                onValueChange={(value) =>
                  setProfileData((prev) => ({ ...prev, field: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bcom">B.Com</SelectItem>
                  <SelectItem value="bba">BBA</SelectItem>
                  <SelectItem value="bca">BCA</SelectItem>
                  <SelectItem value="ba">BA</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                value={profileData.gender}
                onValueChange={(value) =>
                  setProfileData((prev) => ({ ...prev, gender: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Input
                id="bio"
                value={profileData.bio}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, bio: e.target.value }))
                }
                placeholder="Tell us about yourself"
              />
            </div>

            <Button
              className="w-full mt-6 flex items-center gap-2"
              onClick={handleSave}
            >
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;