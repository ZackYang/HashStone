import { Button, Dropdown, ListGroup } from "flowbite-react";
import React, { useEffect, useState } from "react";

export default function Pharmacy() {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [pharmacies, setPharmacies] = useState([]);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [hospitalPharmacies, setHospitalPharmacies] = useState([]);
  const [selectedHospitalPharmacy, setSelectedHospitalPharmacy] = useState([]);

  useEffect(() => {
    const getHospitalData = async () => {
      const data = await fetch("/api/hospitals")
      console.log(data);

      const hospitals = await data.json();

      setHospitals(hospitals);
    };

    const getPharmacyData = async () => {
      const data = await fetch("/api/pharmacies")
      console.log(data);

      const pharmacies = await data.json();

      setPharmacies(pharmacies);
    }

    getHospitalData();
    getPharmacyData();
  }, [])

  useEffect(() => {
    if (selectedHospital) {
      setHospitalPharmacies(
        selectedHospital.pharmacies
      );
    }
  }, [selectedHospital])

  const updateHospitalPharmacies = async () => {
    const data = await fetch(`/api/hospitals/${selectedHospital.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "csrf-token": document.querySelector("meta[name='csrf-token']").getAttribute("content")
      },
      body: JSON.stringify({
        hospital: {
          pharmacy_ids: hospitalPharmacies.map((pharmacy) => pharmacy.id)
        }
      })
    });

    const hospital = await data.json();
    console.log(hospital);
  }

  const renderHospitals = () => {
    return hospitals.map((hospital) => {
      return (
        <Dropdown.Item
          key={hospital.id}
          onClick={
            () => handleHospitalSelect(hospital)
          }>
          {
            hospital.name
          }
        </Dropdown.Item>
      );
    });
  }

  const handleHospitalSelect = (hospital) => {
    setSelectedHospital(hospital);
  }

  const renderPharmacies = () => {
    const unaddedPharmacies = pharmacies.filter((pharmacy) => {
      return !hospitalPharmacies.includes(pharmacy);
    });

    return unaddedPharmacies.map((pharmacy) => {
      return (
        <ListGroup.Item
          key={pharmacy.id}
          onClick={
            () => handlePharmacySelect(pharmacy)
          }>
          {
            pharmacy.name
          }
        </ListGroup.Item>
      );
    })
  }

  const handlePharmacySelect = (pharmacy) => {
    setSelectedPharmacy(pharmacy);
  }

  const renderHospitalPharmacies = () => {
    return hospitalPharmacies.map((pharmacy) => {
      return (
        <ListGroup.Item
          key={pharmacy.id}
          onClick={
            () => handleHospitalPharmacySelect(pharmacy)
          }>
          {
            pharmacy.name
          }
        </ListGroup.Item>
      );
    })
  }

  const handleHospitalPharmacySelect = (pharmacy) => {
    setSelectedHospitalPharmacy(pharmacy);
  }

  const handleAddPharmacy = () => {
    setHospitalPharmacies([
      ...hospitalPharmacies,
      selectedPharmacy
    ]);
  }

  const handleRemovePharmacy = () => {
    setHospitalPharmacies(hospitalPharmacies.filter((pharmacy) => pharmacy !== selectedHospitalPharmacy));
  }

  return (
    <div className="container">
      <div className="flex flex-col w-full">
        <div className="w-full flex">
          <div className="w-1/3">
            <Dropdown
              label="Dropdown button"
              dismissOnClick={false}>
              {
                renderHospitals()
              }
            </Dropdown>
          </div>
          <div className="w-1/3">
            {
              selectedHospital && (
                <div>
                  <h1>
                    {
                      selectedHospital.name
                    }
                  </h1>
                </div>
              )
            }
          </div>
          <div className="w-1/3">
            <Button
              disabled={!selectedHospital}
              onClick={
                updateHospitalPharmacies
              }>
              Save
            </Button>
          </div>
        </div>
        <div className="w-full flex">
          <div className=" basis-1/3">
            <ListGroup className="w-full">
              {
                renderPharmacies()
              }
            </ListGroup>
          </div>
          <div className="basis-1/3 flex flex-col gap-2">
            <Button
              onClick={
                handleAddPharmacy
              }>
              Add
            </Button>
            <Button
              onClick={
                handleRemovePharmacy
              }>
              Remove
            </Button>
          </div>
          <div className=" basis-1/3">
            <ListGroup className="w-full">
              {
                renderHospitalPharmacies()
              }
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
