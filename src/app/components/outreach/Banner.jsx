import React, { useState, useEffect } from "react";
import Image from "next/image";
import bnrThub from "../../assets/dsai/banner.webp";
import personLaptop from "../../assets/dsai/Thub.webp";
import { motion } from "framer-motion";
import CryptoJS from 'crypto-js';

const stateUrl = "https://api.countrystatecity.in/v1/countries/IN/states";
const cityUrl = "https://api.countrystatecity.in/v1/countries/IN/states/";
const apiKey = "RW54RWI5d09URDZSSlN1cFNPQnE3cHpDRXlFY0JTUmxCTE84YXRFYQ=="; // API key for state and city
const secretKey = `${process.env.NEXT_PUBLIC_SECRET_KEY}`

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const infoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const OutreachHeroSection = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedStateCode, setSelectedStateCode] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(stateUrl, {
          headers: {
            "X-CSCAPI-KEY": apiKey,
          },
        });
        const data = await response.json();
        // Sort states alphabetically by name
        const sortedStates = [...data].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setStates(sortedStates);
      } catch (error) {
        console.error("Error fetching state data:", error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async (stateCode) => {
      if (stateCode) {
        try {
          const url = `${cityUrl}${stateCode}/cities`;
          const response = await fetch(url, {
            headers: {
              "X-CSCAPI-KEY": apiKey,
            },
          });
          const data = await response.json();
          // Sort cities alphabetically by name
          const sortedCities = [...data].sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setCities(sortedCities);
        } catch (error) {
          console.error("Error fetching city data:", error);
        }
      } else {
        setCities([]);
      }
    };

    fetchCities(selectedStateCode);
  }, [selectedStateCode]);

  const handleStateChange = (event) => {
    const stateCode = event.target.value;
    setSelectedStateCode(stateCode);

    // Find the state name for the selected code
    const stateName =
      states.find((state) => state.iso2 === stateCode)?.name || "";

    // Update form data with the state name
    setFormData((prev) => ({
      ...prev,
      state: stateName,
    }));

    setCities([]); // Clear cities when state changes
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCityChange = (event) => {
    const cityValue = event.target.value;
    setFormData((prev) => ({
      ...prev,
      city: cityValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.state ||
      !formData.city
    ) {
      alert("All fields marked with * are required!");
      return;
    }

    setIsSubmitting(true);

    // Get UTM values from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const source = queryParams.get("utm_source") || "";
    const medium = queryParams.get("utm_medium") || "";
    const campaign = queryParams.get("utm_campaign") || "";
    const adgroupid = queryParams.get("utm_adgroupid") || "";
    const creativeid = queryParams.get("utm_creativeid") || "";
    const device = queryParams.get("utm_device") || "";
    const network = queryParams.get("utm_network") || "";
    const campaignid = queryParams.get("utm_campaignid") || "";
    const matchtype = queryParams.get("utm_matchype") || "";
    const keyword = queryParams.get("utm_keyword") || "";
    const placement = queryParams.get("utm_placement") || "";
    const utmUrl = window.location.href;

    // Prepare form data for API submission
    const apiPayload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      state: formData.state,
      city: formData.city,
      programName: "dsbi",
      university: "IIITD",
      utmSource: source,
      utmMedium: medium,
      utmCampaign: campaign,
      utmPlacement: placement,
      utmKeyword: keyword,
      utmMatchType: matchtype,
      utmCampaignId: campaignid,
      utmNetwork: network,
      utmDevice: device,
      utmCreativeId: creativeid,
      utmAdgroupId: adgroupid,
      utmURL: utmUrl,
    };

    try {
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(apiPayload),
        secretKey
      ).toString();
      const response = await fetch(`${process.env.NEXT_PUBLIC_ENCRYPTION_API}/api/lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: encryptedData }),
      });
      const data = await response.json();
      console.log(data,"DATA")

      if (data.success) {
        setSubmissionStatus("success");

        // You can either redirect immediately
        window.location.href = "/thank-you";

        // Or set a state and use the thank you component for a moment before redirecting
        setShowThankYou(true);

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          state: "",
          city: "",
        });
      } else {
        setSubmissionStatus("error");
        alert(`Submission failed: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
      alert(
        "An error occurred while submitting the form. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-10">
      <div className="absolute inset-0">
        <Image
          src={bnrThub}
          alt=""
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="md:flex md:justify-between md:items-start lg:gap-16">
          <div className="w-full md:w-[45%] mb-8 md:mb-0">
            <div className="mb-6 text-center md:text-left">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white wow fadeInUp"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                M.Tech
                <br className="hidden md:block" />
                in Data Science &<br />
                Artificial Intelligence
              </motion.h1>
              <motion.p
                className="text-white text-lg md:text-3xl font-semibold leading-relaxed mt-2 wow fadeInUp"
                data-wow-delay="300ms"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                Fuel Your Potential with <br /> DSAI - Lead the Change
              </motion.p>
            </div>
            <div className="mt-2 w-full md:w-[350px] px-5 md:px-0">
              <motion.div
                className="flex items-center border rounded-md border-white wow fadeInUp"
                variants={infoVariants}
                initial="hidden"
                animate="visible"
              >
                <strong className="w-1/2 bg-white text-sm md:text-base font-semibold text-[#041b39] px-4 py-3">
                  Duration
                </strong>
                <strong className="w-1/2 text-sm md:text-base font-semibold text-white text-left px-4">
                  2 Years
                </strong>
              </motion.div>

              <motion.div
                className="flex items-center border rounded-md border-white mt-2 wow fadeInUp"
                data-wow-delay="300ms"
                variants={infoVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                <strong className="w-1/2 bg-white text-sm md:text-base font-semibold text-[#041b39] px-4 py-3">
                  Mode
                </strong>
                <strong className="w-1/2 text-sm md:text-base font-semibold text-white text-left px-4">
                  Online
                </strong>
              </motion.div>

              <motion.div
                className="flex items-center border rounded-md border-white mt-2 wow fadeInUp"
                data-wow-delay="600ms"
                variants={infoVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <strong className="w-1/2 bg-white text-sm md:text-base font-semibold text-[#041b39] px-4 py-3">
                  Program Fees
                </strong>
                <strong className="w-1/2 text-sm md:text-base font-semibold text-white text-left px-4">
                  ₹3.54 Lakhs{" "}
                  <span className="font-normal block text-xs mt-1 text-right mr-3.5">
                    Incl. GST
                  </span>
                </strong>
              </motion.div>
            </div>
          </div>

          <div className="h-full hidden md:block">
            {/* Person Image */}
            <div className="absolute top-22 right-[20rem] w-[55%] h-full flex items-center justify-center pointer-events-none">
              <div className="relative !w-[450px] h-[900px]">
                <Image
                  src={personLaptop}
                  alt="Person with Laptop"
                  layout="fill"
                  objectFit="contain"
                  className=""
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="enquiry">
            <div className="px-3 md:px-0 mt-8 md:mt-0">
              <div className="relative rounded-md shadow-lg py-5 bg-[#0a192f] z-20 ml-auto w-full md:w-[350px] h-[500px]">
                <>
                  <div className="mb-4 bg-white text-center py-6 rounded-t-md">
                    <span className="text-xl text-[#041b39] font-semibold">
                      Get More Info!
                    </span>
                  </div>
                  <div className="px-3">
                    <form
                      id="formID"
                      name="contact-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="space-y-4">
                        <div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 text-white bg-transparent border-white placeholder:text-white"
                            placeholder="Name*"
                            required
                            style={{ borderBottomWidth: "1px" }}
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 text-white bg-transparent border-white placeholder:text-white"
                            placeholder="Email*"
                            maxLength={30}
                            required
                            style={{ borderBottomWidth: "1px" }}
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 text-white bg-transparent border-white placeholder:text-white"
                            placeholder="Mobile*"
                            maxLength={10}
                            pattern="[6-9]{1}[0-9]{9}"
                            title="Phone number with 6-9 and remaining 9 digits"
                            required
                            style={{ borderBottomWidth: "1px" }}
                          />
                        </div>
                        <div>
                          <select
                            name="state"
                            id="stateid"
                            value={selectedStateCode}
                            onChange={handleStateChange}
                            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 text-white bg-transparent border-white appearance-none pr-8"
                            required
                            style={{
                              borderBottomWidth: "1px",
                              backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'><path stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/></svg>\")",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 0.5rem center",
                            }}
                          >
                            <option value="" className="text-gray-800">
                              Select State*
                            </option>
                            {states.map((state) => (
                              <option
                                key={state.iso2}
                                value={state.iso2}
                                className="text-gray-800"
                              >
                                {state.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <select
                            name="city"
                            id="cityid"
                            value={formData.city}
                            onChange={handleCityChange}
                            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 text-white bg-transparent border-white appearance-none pr-8"
                            required
                            style={{
                              borderBottomWidth: "1px",
                              backgroundImage:
                                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'><path stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/></svg>\")",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 0.5rem center",
                            }}
                          >
                            <option value="" className="text-gray-800">
                              Select City*
                            </option>
                            {cities.length > 0 ? (
                              cities.map((city) => (
                                <option
                                  key={city.name}
                                  value={city.name}
                                  className="text-gray-800"
                                >
                                  {city.name}
                                </option>
                              ))
                            ) : (
                              <option value="" className="text-gray-800">
                                {selectedStateCode
                                  ? "No cities available"
                                  : "Select state first"}
                              </option>
                            )}
                          </select>
                        </div>
                        <div className="mt-8">
                          <button
                            type="submit"
                            className="w-full bg-white text-[#0a192f] py-3 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-300 font-semibold cursor-pointer"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Submitting..." : "Submit"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutreachHeroSection;
