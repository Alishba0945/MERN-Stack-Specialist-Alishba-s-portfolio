import React, { useState, useEffect } from "react";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]); // State to store services
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/services"); // GET request
        const data = await response.json(); // Response ko JSON mein convert karna
        setServices(data); // Services ko state mein set karna
        setLoading(false); // Loading ko false karna jab data load ho jaye
      } catch (error) {
        console.error("Error fetching services:", error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []); // Empty array ka matlab hai yeh effect sirf once run karega

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <h2 className="services-heading">What I Can Do for You</h2>
      <div className="services-container">
        {services.length === 0 ? (
          <p className="no-services">No services available.</p>
        ) : (
          services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-name">{service.service}</h3>
              <p className="service-description">{service.description}</p>
              <p className="price">Price: {service.price}</p>
              <p className="provider">Provider: {service.provider}</p>
              <a href="/contact">
                <div className="hero-contact">Contact with me</div>
              </a>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Services;
