import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Message from "../components/Message";
import Spinner from "../components/Spinner";

export default function Homepage({ url }) {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchUsers() {
        try {
          setIsLoading(true);
          const res = await fetch(`${url}/users`);
          const data = await res.json();
          setUsers(data);
          setFilteredUsers(data);
        } catch {
          console.log("Some error...");
        } finally {
          setIsLoading(false);
        }
      }

      fetchUsers();
    },
    [url]
  );

  return (
    <main>
      <Header
        users={users}
        filteredUsers={filteredUsers}
        setFilteredUsers={setFilteredUsers}
      />
      <section>
        {isLoading && <Spinner />}
        {!isLoading && filteredUsers.length > 0 ? (
          <List items={filteredUsers} />
        ) : (
          <>{!isLoading && <Message message="Nothing found" />}</>
        )}
      </section>
    </main>
  );
}
