document.addEventListener('DOMContentLoaded', function() {
  const steps = document.querySelectorAll('.step');
  const nextButtons = document.querySelectorAll('[id^="next"]');
  const backButtons = document.querySelectorAll('[id^="back"]');
  const submitButton = document.getElementById('submit');

  let formData = {
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  };

  // Function to show/hide steps
  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      if (index === stepIndex) {
        step.style.display = 'block';
      } else {
        step.style.display = 'none';
      }
    });
  }

  // Function to validate current step fields
  function validateStep(stepIndex) {
    let isValid = true;

    switch (stepIndex) {
      case 0:
        isValid = validatePersonalInfo();
        break;
      case 1:
        isValid = validateAddressInfo();
        break;
      default:
        break;
    }

    return isValid;
  }

  // Validation functions for each step
  function validatePersonalInfo() {
    let isValid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name === '') {
      displayError('nameError', 'Name is required');
      isValid = false;
    } else {
      clearError('nameError');
    }

    if (email === '') {
      displayError('emailError', 'Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      displayError('emailError', 'Invalid email format');
      isValid = false;
    } else {
      clearError('emailError');
    }

    if (phone === '') {
      displayError('phoneError', 'Phone is required');
      isValid = false;
    } else {
      clearError('phoneError');
    }

    if (isValid) {
      formData.name = name;
      formData.email = email;
      formData.phone = phone;
    }

    return isValid;
  }

  function validateAddressInfo() {
    let isValid = true;
    const address1 = document.getElementById('address1').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();

    if (address1 === '') {
      displayError('address1Error', 'Address Line 1 is required');
      isValid = false;
    } else {
      clearError('address1Error');
    }

    if (city === '') {
      displayError('cityError', 'City is required');
      isValid = false;
    } else {
      clearError('cityError');
    }

    if (state === '') {
      displayError('stateError', 'State is required');
      isValid = false;
    } else {
      clearError('stateError');
    }

    if (zip === '') {
      displayError('zipError', 'Zip Code is required');
      isValid = false;
    } else {
      clearError('zipError');
    }

    if (isValid) {
      formData.address1 = address1;
      formData.address2 = document.getElementById('address2').value.trim();
      formData.city = city;
      formData.state = state;
      formData.zip = zip;
    }

    return isValid;
  }

  // Function to display error message
  function displayError(id, message) {
    document.getElementById(id).textContent = message;
  }

  // Function to clear error message
  function clearError(id) {
    document.getElementById(id).textContent = '';
  }

  // Function to check valid email format (basic regex for demonstration)
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Event listeners for navigation buttons
  nextButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      if (validateStep(index)) {
        showStep(index + 1);
      }
    });
  });

  backButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      showStep(index);
    });
  });

  submitButton.addEventListener('click', function() {
    // Display confirmation data in Step 3
    document.getElementById('confirmName').textContent = `Name: ${formData.name}`;
    document.getElementById('confirmEmail').textContent = `Email: ${formData.email}`;
    document.getElementById('confirmPhone').textContent = `Phone: ${formData.phone}`;
    document.getElementById('confirmAddress1').textContent = `Address Line 1: ${formData.address1}`;
    document.getElementById('confirmAddress2').textContent = `Address Line 2: ${formData.address2}`;
    document.getElementById('confirmCityStateZip').textContent = `City, State, Zip Code: ${formData.city}, ${formData.state} ${formData.zip}`;

    // You can save formData to local storage here if needed

    // For demonstration, we alert the data
    alert('Form submitted successfully!');
  });

  // Initialize: Show first step
  showStep(0);
});
