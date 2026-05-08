import { useState } from "react";

interface User {
  name: string;
  email: string;
}

interface Props {
  user: User;
  onUpdate: (user: User) => void;
}

export default function UserProfileExercise({ user, onUpdate }: Props) {
  const [name, setName] = useState<string>(user.name);
  const [email, setEmail] = useState<string>(user.email);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate({
      ...user,
      name: name,
      email: email,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </form>
  );
}
