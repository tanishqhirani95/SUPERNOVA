import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 pt-20">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600 mb-6">
            Sorry, the page you are looking for doesn't exist.
          </p>
          
          <Link href="/">
            <a className="bg-gold text-black px-6 py-2 rounded hover:bg-gold-light transition-colors duration-300 inline-block">
              Return to Homepage
            </a>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
