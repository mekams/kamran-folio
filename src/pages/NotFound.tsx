
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <div className="text-8xl font-bold text-blue-500 mb-4">404</div>
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleGoHome}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
          >
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Button>
          <Button 
            onClick={handleGoBack}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          Error code: 404 | Route: {location.pathname}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
