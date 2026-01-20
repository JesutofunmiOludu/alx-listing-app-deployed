import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

const ReviewSection = ({ propertyId }: { propertyId: string | string[] | undefined }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!propertyId) return;
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="mt-8 text-gray-500">Loading reviews...</p>;
  }

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-semibold mb-6">Reviews ({reviews.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="border p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 overflow-hidden">
                {review.avatar ? (
                  <img src={review.avatar} alt={review.user} className="w-full h-full object-cover" />
                ) : (
                  review.user.charAt(0)
                )}
              </div>
              <div>
                <h4 className="font-semibold">{review.user}</h4>
                <p className="text-gray-500 text-sm">{new Date(review.date).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < review.rating ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic">&quot;{review.comment}&quot;</p>
          </div>
        ))}
      </div>
      {reviews.length === 0 && (
        <p className="text-gray-500 mt-4">No reviews yet for this property.</p>
      )}
    </div>
  );
};

export default ReviewSection;
