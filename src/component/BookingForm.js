import React, { useState, useEffect } from "react";

const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    countryCode: "",
    country: "",
    timeZone: "",
    message: "",
  });

  // Store API country data
  const [countryData, setCountryData] = useState([]);
  // Store available timezones for selected country
  const [availableTimeZones, setAvailableTimeZones] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  // Fetch country data on mount
  useEffect(() => {
    fetch(
      "http://kingcompiler.vps.webdock.cloud:7332/kc-visitor/api/getFormFields"
    )
      .then((res) => res.json())
      .then((data) => setCountryData(data))
      .catch(() => setCountryData([]));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "country") {
      const selectedCountry = countryData.find((c) => c.name === value);
      setFormData((prev) => ({
        ...prev,
        country: value,
        countryCode: selectedCountry ? selectedCountry.phone : "",
        timeZone:
          selectedCountry && selectedCountry.timezones.length === 1
            ? selectedCountry.timezones[0]
            : "",
      }));
      setAvailableTimeZones(selectedCountry ? selectedCountry.timezones : []);
    } else if (name === "timeZone") {
      setFormData((prev) => ({
        ...prev,
        timeZone: value,
      }));
    } else if (name === "countryCode") {
      setFormData((prev) => ({
        ...prev,
        countryCode: value,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.emailId.trim()) newErrors.emailId = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailId))
      newErrors.emailId = "Invalid email address";
    if (!formData.countryCode.trim())
      newErrors.countryCode = "Country code is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.timeZone.trim()) newErrors.timeZone = "Time zone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Prepare payload as per API
      const payload = {
        phoneNumber: formData.phoneNumber,
        firstName: formData.firstName,
        country: formData.country,
        timezone: formData.timeZone,
        emailId: formData.emailId,
        phoneCode: formData.countryCode,
        message: formData.message,
        lastName: formData.lastName,
      };
      try {
        const res = await fetch(
          "http://kingcompiler.vps.webdock.cloud:7332/kc-visitor/api/bookDemo",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }
        );
        if (res.ok) {
          setSubmitStatus("success");
          setFormData({
            firstName: "",
            lastName: "",
            emailId: "",
            phoneNumber: "",
            countryCode: "",
            country: "",
            timeZone: "",
            message: "",
          });
          setAvailableTimeZones([]);
        } else {
          setSubmitStatus("error");
        }
      } catch {
        setSubmitStatus("error");
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-2xl p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
              {errors.firstName && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.firstName}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
              {errors.lastName && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.lastName}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Email ID</label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
            {errors.emailId && (
              <div className="text-red-500 text-xs mt-1">{errors.emailId}</div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Country Code</label>
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select</option>
                {countryData.map((country) => (
                  <option key={country.phone} value={country.phone}>
                    {country.phone}
                  </option>
                ))}
              </select>
              {errors.countryCode && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.countryCode}
                </div>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              />
              {errors.phoneNumber && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.phoneNumber}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select</option>
                {countryData.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.country}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Time Zone</label>
              {availableTimeZones.length > 1 ? (
                <select
                  name="timeZone"
                  value={formData.timeZone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Select</option>
                  {availableTimeZones.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  name="timeZone"
                  value={formData.timeZone}
                  disabled
                  className="w-full border rounded px-3 py-2 bg-gray-100"
                />
              )}
              {errors.timeZone && (
                <div className="text-red-500 text-xs mt-1">
                  {errors.timeZone}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded px-3 py-2"
            />
            {errors.message && (
              <div className="text-red-500 text-xs mt-1">{errors.message}</div>
            )}
          </div>

          {submitStatus === "success" && (
            <div className="text-green-600 text-sm mb-2">
              Your request has been submitted successfully!
            </div>
          )}
          {submitStatus === "error" && (
            <div className="text-red-600 text-sm mb-2">
              Something went wrong. Please try again.
            </div>
          )}

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
