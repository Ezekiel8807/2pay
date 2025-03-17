"use client";
import { useState } from "react";

//components
import ProUpdateForm from "../ProUpdateForm";

type PersonalProUpdateProbs = {
  userpersonalData: {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
  };
};

export default function PersonalProUpdate({
  userpersonalData,
}: PersonalProUpdateProbs) {
  const [firstname, setFirstname] = useState(userpersonalData.firstname);
  const [lastname, setLastname] = useState(userpersonalData.lastname);

  async function handlePerProUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch(
      `/api/users/${userpersonalData.username}?updateType=personal`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          username: userpersonalData.username,
          email: userpersonalData.email,
        }),
      }
    );

    const result = await response.json();
    console.log(result);
  }

  return (
    <ProUpdateForm handleForm={handlePerProUp} title="Personal Information">
      <div className="flex flex-col md:flex-row mb-5 md:justify-between">
        <label htmlFor="firstname">Name: </label>
        <input
          className="w-full md:w-[70%] outline-none bg-none border-b-2 p-1 text-right"
          type="text"
          value={firstname}
          name="firstname"
          id="firstname"
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>

      <div className="flex flex-col md:flex-row mb-5 md:justify-between">
        <label htmlFor="lastname">Surname: </label>
        <input
          className="w-full md:w-[70%] outline-none bg-none border-b-2 p-1 text-right"
          type="text"
          value={lastname}
          name="lastname"
          id="lastname"
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>

      <div className="flex flex-col md:flex-row mb-5 md:justify-between">
        <label htmlFor="username">Username: </label>
        <input
          className="w-full md:w-[70%] outline-none bg-none border-b-2 p-1 text-right"
          type="text"
          value={userpersonalData.username}
          readOnly
          name="username"
          id="username"
        />
      </div>

      <div className="flex flex-col md:flex-row mb-5 md:justify-between">
        <label htmlFor="email">Email: </label>
        <input
          className="w-full md:w-[70%] outline-none bg-none border-b-2 p-1 text-right"
          type="email"
          value={userpersonalData.email}
          readOnly
          name="email"
          id="email"
        />
      </div>
    </ProUpdateForm>
  );
}
