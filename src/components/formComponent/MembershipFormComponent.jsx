'use client';
import { sendEmail } from '@/lib/emailSend';
import Link from 'next/link';
import { useState } from 'react';

const MembershipFormComponent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    nationality: 'united-arab-emirates',
    phone: '',
    monthlyIncome: '',
    linkedin: '',
    consent: false,
  });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(
    'Thank you for your enquiry on Richy Life Club Membership!'
  );
  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
    dob: '',
    nationality: '',
    phone: '',
    monthlyIncome: '',
    linkedin: '',
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };
  function validateDateOfBirth(dateOfBirth) {
    // Check the date format.
    const parts = dateOfBirth.split('/');

    // Check the date range.
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const year = parseInt(parts[2]);

    if (
      day < 1 ||
      day > 31 ||
      month < 1 ||
      month > 12 ||
      year < 1900 ||
      year > new Date().getFullYear()
    ) {
      return false;
    }

    // Check for future dates.
    const date = new Date(year, month - 1, day);
    if (date > new Date()) {
      return false;
    }

    return true;
  }
  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!formData.dob.trim()) {
      errors.dob = 'Date of Birth is required';
    } else if (!validateDateOfBirth(formData.dob)) {
      errors.dob = 'Invalid Data of Birth ';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Invalid phone number format';
    }

    if (!formData.nationality.trim()) {
      errors.nationality = 'Nationality is required';
    }

    if (!formData.monthlyIncome.trim()) {
      errors.monthlyIncome = 'Monthly Income is required';
    } else if (
      isNaN(Number(formData.monthlyIncome)) ||
      Number(formData.monthlyIncome) <= 8000
    ) {
      errors.monthlyIncome = 'Monthly Income must be greater than 8000 AED';
    }

    if (!formData.linkedin.trim()) {
      errors.linkedin = 'Linkedin or Employer Name is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleInputFocus = (name) => {
    // Clear the error for the focused input
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setConsentError(true);
      return;
    } else {
      setConsentError(false);
    }
    if (validateForm()) {
      setIsSending(true);
      const res = await sendEmail({ data: formData, membership: true });
      if (res === 'success') {
        setTimeout(() => {
          setIsSending(false);
          setIsSubmitted(true);
          setFormData({
            fullName: '',
            email: '',
            dob: '',
            nationality: 'united-arab-emirates',
            phone: '',
            monthlyIncome: '',
            linkedin: '',
            consent: false,
          });
        }, 2000);
      } else {
        setSubmitMessage('Sorry, Something went wrong!');
      }
    } else {
      console.log('not done');
    }
  };

  return (
    <div className="max-w-[800px] mx-auto w-full px-0 md:px-6">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1  gap-y-[24px] md:gap-y-[24px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[22px]">
            <div className="relative">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onFocus={() => handleInputFocus('firstName')}
                onChange={handleChange}
                className="col-span-1 w-full px-3 md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
                placeholder="Full Name"
              />
              {formErrors.fullName && (
                <p className="text-red-400 text-[12px] absolute ">
                  *{formErrors.fullName}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="col-span-1 w-full px-3 md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
                placeholder="Date of Birth(DD/MM/YYYY)"
              />
              {formErrors.dob && (
                <p className="text-red-400 text-[12px] absolute ">
                  *{formErrors.dob}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[22px]">
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="col-span-1 w-full px-3 md:px-6 py-3 md:py-5  bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
                placeholder="Email"
              />
              {formErrors.email && (
                <p className="text-red-400 text-[12px] absolute ">
                  *{formErrors.email}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="col-span-1 w-full px-3 md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
                placeholder="Phone"
              />
              {formErrors.phone && (
                <p className="text-red-400 text-[12px] absolute ">
                  *{formErrors.phone}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-[22px]">
            <div className="relative">
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="col-span-1 w-full  px-3 md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
                style={{ appearance: 'none', backgroundImage: 'none' }}
              >
                <option value="afghan">Afghan</option>
                <option value="albanian">Albanian</option>
                <option value="algerian">Algerian</option>
                <option value="american">American</option>
                <option value="andorran">Andorran</option>
                <option value="angolan">Angolan</option>
                <option value="anguillan">Anguillan</option>
                <option value="citizen-of-antigua-and-barbuda">
                  Citizen of Antigua and Barbuda
                </option>
                <option value="argentine">Argentine</option>
                <option value="armenianaustralian">ArmenianAustralian</option>
                <option value="austrian">Austrian</option>
                <option value="azerbaijani">Azerbaijani</option>
                <option value="bahamian">Bahamian</option>
                <option value="bahraini">Bahraini</option>
                <option value="bangladeshi">Bangladeshi</option>
                <option value="barbadian">Barbadian</option>
                <option value="belarusian">Belarusian</option>
                <option value="belgian">Belgian</option>
                <option value="belizean">Belizean</option>
                <option value="beninese">Beninese</option>
                <option value="bermudian">Bermudian</option>
                <option value="bhutanese">Bhutanese</option>
                <option value="bolivian">Bolivian</option>
                <option value="citizen-of-bosnia-and-herzegovina">
                  Citizen of Bosnia and Herzegovina
                </option>
                <option value="botswanan">Botswanan</option>
                <option value="brazilian">Brazilian</option>
                <option value="british">British</option>
                <option value="british-virgin-islander">
                  British Virgin Islander
                </option>
                <option value="bruneian">Bruneian</option>
                <option value="bulgarian">Bulgarian</option>
                <option value="burkinan">Burkinan</option>
                <option value="burmese">Burmese</option>
                <option value="burundian">Burundian</option>
                <option value="cambodian">Cambodian</option>
                <option value="cameroonian">Cameroonian</option>
                <option value="canadian">Canadian</option>
                <option value="cape-verdean">Cape Verdean</option>
                <option value="cayman-islander">Cayman Islander</option>
                <option value="central-african">Central African</option>
                <option value="chadian">Chadian</option>
                <option value="chilean">Chilean</option>
                <option value="chinese">Chinese</option>
                <option value="colombian">Colombian</option>
                <option value="comoran">Comoran</option>
                <option value="congolese-(congo)">Congolese (Congo)</option>
                <option value="congolese-(drc)">Congolese (DRC)</option>
                <option value="cook-islander">Cook Islander</option>
                <option value="costa-rican">Costa Rican</option>
                <option value="croatian">Croatian</option>
                <option value="cuban">Cuban</option>
                <option value="cymraes">Cymraes</option>
                <option value="cymro">Cymro</option>
                <option value="cypriot">Cypriot</option>
                <option value="czech">Czech</option>
                <option value="danish">Danish</option>
                <option value="djiboutian">Djiboutian</option>
                <option value="dominican">Dominican</option>
                <option value="citizen-of-the-dominican-republic">
                  Citizen of the Dominican Republic
                </option>
                <option value="dutch">Dutch</option>
                <option value="east-timorese">East Timorese</option>
                <option value="ecuadorean">Ecuadorean</option>
                <option value="egyptian">Egyptian</option>
                <option value="emirati">Emirati</option>
                <option value="english">English</option>
                <option value="equatorial-guinean">Equatorial Guinean</option>
                <option value="eritrean">Eritrean</option>
                <option value="estonian">Estonian</option>
                <option value="ethiopian">Ethiopian</option>
                <option value="faroese">Faroese</option>
                <option value="fijian">Fijian</option>
                <option value="filipino">Filipino</option>
                <option value="finnish">Finnish</option>
                <option value="french">French</option>
                <option value="gabonese">Gabonese</option>
                <option value="gambian">Gambian</option>
                <option value="georgian">Georgian</option>
                <option value="german">German</option>
                <option value="ghanaian">Ghanaian</option>
                <option value="gibraltarian">Gibraltarian</option>
                <option value="greek">Greek</option>
                <option value="greenlandic">Greenlandic</option>
                <option value="grenadian">Grenadian</option>
                <option value="guamanian">Guamanian</option>
                <option value="guatemalan">Guatemalan</option>
                <option value="citizen-of-guinea-bissau">
                  Citizen of Guinea-Bissau
                </option>
                <option value="guinean">Guinean</option>
                <option value="guyanese">Guyanese</option>
                <option value="haitian">Haitian</option>
                <option value="honduran">Honduran</option>
                <option value="hong-konger">Hong Konger</option>
                <option value="hungarian">Hungarian</option>
                <option value="icelandic">Icelandic</option>
                <option value="indian">Indian</option>
                <option value="indonesian">Indonesian</option>
                <option value="iranian">Iranian</option>
                <option value="iraqi">Iraqi</option>
                <option value="irish">Irish</option>
                <option value="israeli">Israeli</option>
                <option value="italian">Italian</option>
                <option value="ivorian">Ivorian</option>
                <option value="jamaican">Jamaican</option>
                <option value="japanese">Japanese</option>
                <option value="jordanian">Jordanian</option>
                <option value="kazakh">Kazakh</option>
                <option value="kenyan">Kenyan</option>
                <option value="kittitian">Kittitian</option>
                <option value="citizen-of-kiribati">Citizen of Kiribati</option>
                <option value="kosovan">Kosovan</option>
                <option value="kuwaiti">Kuwaiti</option>
                <option value="kyrgyz">Kyrgyz</option>
                <option value="lao">Lao</option>
                <option value="latvian">Latvian</option>
                <option value="lebanese">Lebanese</option>
                <option value="liberian">Liberian</option>
                <option value="libyan">Libyan</option>
                <option value="liechtenstein-citizen">
                  Liechtenstein citizen
                </option>
                <option value="lithuanian">Lithuanian</option>
                <option value="luxembourger">Luxembourger</option>
                <option value="macanese">Macanese</option>
                <option value="macedonian">Macedonian</option>
                <option value="malagasy">Malagasy</option>
                <option value="malawian">Malawian</option>
                <option value="malaysian">Malaysian</option>
                <option value="maldivian">Maldivian</option>
                <option value="malian">Malian</option>
                <option value="maltese">Maltese</option>
                <option value="marshallese">Marshallese</option>
                <option value="martiniquais">Martiniquais</option>
                <option value="mauritanian">Mauritanian</option>
                <option value="mauritian">Mauritian</option>
                <option value="mexican">Mexican</option>
                <option value="micronesian">Micronesian</option>
                <option value="moldovan">Moldovan</option>
                <option value="monegasque">Monegasque</option>
                <option value="mongolian">Mongolian</option>
                <option value="montenegrin">Montenegrin</option>
                <option value="montserratian">Montserratian</option>
                <option value="moroccan">Moroccan</option>
                <option value="mosotho">Mosotho</option>
                <option value="mozambican">Mozambican</option>
                <option value="namibian">Namibian</option>
                <option value="nauruan">Nauruan</option>
                <option value="nepalese">Nepalese</option>
                <option value="new-zealander">New Zealander</option>
                <option value="nicaraguan">Nicaraguan</option>
                <option value="nigerian">Nigerian</option>
                <option value="nigerien">Nigerien</option>
                <option value="niuean">Niuean</option>
                <option value="north-korean">North Korean</option>
                <option value="northern-irish">Northern Irish</option>
                <option value="norwegian">Norwegian</option>
                <option value="omani">Omani</option>
                <option value="pakistani">Pakistani</option>
                <option value="palauan">Palauan</option>
                <option value="palestinian">Palestinian</option>
                <option value="panamanian">Panamanian</option>
                <option value="papua-new-guinean">Papua New Guinean</option>
                <option value="paraguayan">Paraguayan</option>
                <option value="peruvian">Peruvian</option>
                <option value="pitcairn-islander">Pitcairn Islander</option>
                <option value="polish">Polish</option>
                <option value="portuguese">Portuguese</option>
                <option value="prydeinig">Prydeinig</option>
                <option value="puerto-rican">Puerto Rican</option>
                <option value="qatari">Qatari</option>
                <option value="romanian">Romanian</option>
                <option value="russian">Russian</option>
                <option value="rwandan">Rwandan</option>
                <option value="salvadorean">Salvadorean</option>
                <option value="sammarinese">Sammarinese</option>
                <option value="samoan">Samoan</option>
                <option value="sao-tomean">Sao Tomean</option>
                <option value="saudi-arabian">Saudi Arabian</option>
                <option value="scottish">Scottish</option>
                <option value="senegalese">Senegalese</option>
                <option value="serbian">Serbian</option>
                <option value="citizen-of-seychelles">
                  Citizen of Seychelles
                </option>
                <option value="sierra-leonean">Sierra Leonean</option>
                <option value="singaporean">Singaporean</option>
                <option value="slovak">Slovak</option>
                <option value="slovenian">Slovenian</option>
                <option value="solomon-islander">Solomon Islander</option>
                <option value="somali">Somali</option>
                <option value="south-african">South African</option>
                <option value="south-korean">South Korean</option>
                <option value="south-sudanese">South Sudanese</option>
                <option value="spanish">Spanish</option>
                <option value="sri-lankan">Sri Lankan</option>
                <option value="st-helenian">St Helenian</option>
                <option value="st-lucian">St Lucian</option>
                <option value="stateless">Stateless</option>
                <option value="sudanese">Sudanese</option>
                <option value="surinamese">Surinamese</option>
                <option value="swazi">Swazi</option>
                <option value="swedish">Swedish</option>
                <option value="swiss">Swiss</option>
                <option value="syrian">Syrian</option>
                <option value="taiwanese">Taiwanese</option>
                <option value="tajik">Tajik</option>
                <option value="tanzanian">Tanzanian</option>
                <option value="thai">Thai</option>
                <option value="togolese">Togolese</option>
                <option value="tongan">Tongan</option>
                <option value="trinidadian">Trinidadian</option>
                <option value="tristanian">Tristanian</option>
                <option value="tunisian">Tunisian</option>
                <option value="turkish">Turkish</option>
                <option value="turkmen">Turkmen</option>
                <option value="turks-and-caicos-islander">
                  Turks and Caicos Islander
                </option>
                <option value="tuvaluan">Tuvaluan</option>
                <option value="ugandan">Ugandan</option>
                <option value="ukrainian">Ukrainian</option>
                <option value="uruguayan">Uruguayan</option>
                <option value="united-arab-emirates">
                  United Arab Emirates
                </option>
                <option value="uzbek">Uzbek</option>
                <option value="vatican-citizen">Vatican citizen</option>
                <option value="citizen-of-vanuatu">Citizen of Vanuatu</option>
                <option value="venezuelan">Venezuelan</option>
                <option value="vietnamese">Vietnamese</option>
                <option value="vincentian">Vincentian</option>
                <option value="wallisian">Wallisian</option>
                <option value="welsh">Welsh</option>
                <option value="yemeni">Yemeni</option>
                <option value="zambian">Zambian</option>
                <option value="zimbabwean">Zimbabwean</option>
              </select>

              {formErrors.nationality && (
                <p className="text-red-400 text-[12px] absolute ">
                  *{formErrors.nationality}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                name="monthlyIncome"
                value={formData.monthlyIncome}
                onChange={handleChange}
                className="col-span-1 w-full px-3 md:px-6 py-3 md:py-5 bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
                placeholder="Monthly Income / Net Worth (AED)"
              />
              {formErrors.monthlyIncome && (
                <p className="text-red-400 text-[12px] absolute ">
                  *{formErrors.monthlyIncome}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 ">
            <div className="relative">
              <input
                type="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="col-span-1 w-full px-3 md:px-6 py-3 md:py-5  bg-[#f4f4f4] placeholder-[#6C757D] font-inter text-sm md:text-base font-normal focus:outline-none rounded-none md:rounded"
                placeholder="Link to Linkedin profile / Employer Name"
              />
              {formErrors.linkedin && (
                <p className="text-red-400 text-[12px] absolute ">
                  *{formErrors.linkedin}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2"
          />
          <label
            htmlFor="consent"
            className={`text-sm  ${
              consentError ? 'text-red-400' : 'text-gray-600'
            }`}
          >
            I confirm that I have read and agree with the{' '}
            <Link href={'/terms-of-use'}>Terms & Conditions</Link> and{' '}
            <Link href={'/privacy-policy'}>Privacy Policy.</Link>
          </label>
        </div>
        <div className="flex items-center justify-center mt-8 md:mt-12  mx-auto">
          <button
            disabled={isSending}
            type="submit"
            className="px-4 md:px-10 py-2 md:py-3 text-white font-medium bg-primary border border-solid border-primary w-fit rounded"
          >
            {isSending ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
      {isSubmitted && (
        <div className="mt-4 text-center">
          <p className="text-green-500">{submitMessage}</p>
        </div>
      )}
    </div>
  );
};

export default MembershipFormComponent;
