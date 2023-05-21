import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "components/Navbar";
import "../../app/globals.css";
import axios from "axios";
import Typewriter from "typewriter-effect";

export default function About() {
  const [contactArray, setContactArray] = useState([[]]);
  const [filteredArray, setFilteredArray] = useState([[]]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    axios
      .get("https://hackdavisapi-bianlee.vercel.app/api/getContact")
      .then((response) => {
        setContactArray(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  function handleSearch() {
    console.log("search being invoked");
    var searchItem = event.target.value;
    setSearchItem(event.target.value);

    setFilteredArray(
      contactArray.filter((item) => item.name.includes(searchItem))
    );

    console.log(filteredArray);
  }

  return (
    <>
      <div>
        <Navbar />
        <form className="items-center">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>

          <center>
            <div className="relative" style={{ width: "90%" }}>
              <input
                type="search"
                id="default-search"
                className="w-full block p-8 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
                style={{
                  height: "3rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
                onChange={() => handleSearch()}
              />
              {/* 
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
              */}
              <br />

              {contactArray.length != 30 ? (
                <>
                  {" "}
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "Loading... Fetching data from MongoDB Atlas"
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
          </center>
        </form>
        <br />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            {/*
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
             */}
            {searchItem.length != 0 ? (
              <>
                {filteredArray.map((element) => {
                  return (
                    <tbody key={element._id}>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {element.name}
                        </th>
                        <td className="px-6 py-4"> {element.phone} </td>
                        {/* <td className="px-6 py-4">{element.rating}</td> */}
                        <td className="px-5 py-4">
                          <a
                            href={element.business_url}
                            target="_blank"
                            style={{ color: "blue" }}
                          >
                            {element.business_url}
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          {element.categories.join(" ")}
                        </td>

                        {/*
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
               */}
                      </tr>
                    </tbody>
                  );
                })}
              </>
            ) : (
              <>
                {" "}
                {contactArray.map((element) => {
                  return (
                    <tbody key={element._id}>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {element.name}
                        </th>
                        <td className="px-6 py-4"> {element.phone} </td>
                        {/* <td className="px-6 py-4">{element.rating}</td> */}
                        <td className="px-5 py-4">
                          <a
                            href={element.business_url}
                            target="_blank"
                            style={{ color: "blue" }}
                          >
                            {element.business_url}
                          </a>
                        </td>
                        {/* <td className="px-6 py-4">{element.categories}</td> */}

                        {/*
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
                 */}
                      </tr>
                    </tbody>
                  );
                })}
              </>
            )}
          </table>
        </div>
      </div>
    </>
  );
}
