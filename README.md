# alx-listing-app-04
ALX Listing App – Milestone 5
API Integration for All Pages
Project Overview
This milestone upgrades the Airbnb clone from a static prototype to a fully dynamic application by integrating REST APIs across all major pages.
Property listings, property details, bookings, and reviews are no longer hardcoded. All data is now fetched from real API endpoints, with proper handling for loading states, errors, and form submissions.

Learning Objectives
By completing this milestone, you will be able to:


Make API calls in a Next.js application using Axios


Fetch data dynamically using route parameters


Handle loading and error states cleanly in React


Submit form data to backend endpoints


Render dynamic content across multiple pages


Build reusable components that work with async data



Key Features Implemented
FeatureAPI EndpointDescriptionProperty ListingGET /api/propertiesFetches all available propertiesProperty DetailsGET /api/properties/:idFetches details of a selected propertyBookingsPOST /api/bookingsSubmits booking form dataReviewsGET /api/properties/:id/reviewsFetches reviews for a property

Tech Stack


Next.js – Routing and page rendering


React Hooks – useState, useEffect


Axios – API communication


TypeScript – Type safety


Tailwind CSS – Styling



Installation
Clone the repository and install dependencies:
git clone https://github.com/JesutofunmiOludu/alx-listing-app-04.git
cd alx-listing-app-04
npm install
npm install axios
npm run dev


Folder Structure
pages/
 ├── index.tsx                 # Property listing page
 ├── property/
 │    └── [id].tsx             # Property detail page
 ├── booking/
 │    └── index.tsx            # Booking form page

components/
 └── property/
      ├── PropertyCard.tsx
      ├── PropertyDetail.tsx
      └── ReviewSection.tsx


API Integration Breakdown
1. Property Listing Page
File: pages/index.tsx


Fetches all properties from /api/properties


Uses useEffect to load data on page mount


Displays loading state before rendering data



2. Property Detail Page
File: pages/property/[id].tsx


Reads property ID from URL using useRouter


Fetches property details dynamically from /api/properties/:id


Displays fallback messages when data is missing or still loading



3. Booking Page
File: pages/booking/index.tsx


Sends booking data to /api/bookings using POST


Displays error message on failure


Disables submit button while request is processing



4. Review Section
File: components/property/ReviewSection.tsx


Fetches reviews from /api/properties/:id/reviews


Displays dynamic reviews based on selected property



Real-World Use Case
This milestone mirrors how real booking platforms work. Every property, booking, and review is pulled live from the server instead of being stored locally. The system is now scalable, dynamic, and ready for real production usage.

Assessment Checklist


All API endpoints connected


Loading states implemented


Error handling implemented


No hardcoded data remaining


Review link generated on time



Status
Milestone 5 – API Integration for All Pages
Project Duration: Jan 5, 2026 – Jan 12, 2026

Happy coding 🚀