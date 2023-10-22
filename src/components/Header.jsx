import { useEffect, useState } from "react";
import Button from "./Button";
import Search from "./Search";

function Header({ users, filteredUsers, setFilteredUsers }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortByName, setSortByName] = useState("ASC");

  useEffect(
    function () {
      //search by username and name
      const filteredUsers = users.filter(
        (user) =>
          user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredUsers(filteredUsers);
    },
    [searchQuery]
  );

  // useEffect(
  //   function () {
  //     const sortUsers =
  //       sortByName === "ASC"
  //         ? [...users].sort((a, b) => (a.username > b.username ? 1 : -1))
  //         : [...users].sort((a, b) => (a.username > b.username ? -1 : 1));
  //     setFilteredUsers(sortUsers);
  //   },
  //   [sortByName]
  // );

  const handleSort = () => {
    setSortByName(sortByName === "ASC" ? "DESC" : "ASC");
    const sortUsers =
      sortByName === "ASC"
        ? [...filteredUsers].sort((a, b) => (a.username > b.username ? 1 : -1))
        : [...filteredUsers].sort((a, b) => (a.username > b.username ? -1 : 1));
    setFilteredUsers(sortUsers);
  };

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div className="search">
        <Button onClick={handleSort} type="secondary sm">
          Sort by username ({sortByName})
        </Button>
        <Search setSearchQuery={setSearchQuery} />
      </div>
    </header>
  );
}

export default Header;
