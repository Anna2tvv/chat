"use client";

import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { io } from "socket.io-client";

export default function Home() {
  const modal = useRef<HTMLDialogElement>(null);
  const socket = io("http://localhost:5000");
  useEffect(() => {
    modal.current?.showModal();
    return () => {
      socket.close();
    };
  });
  const [username, setUsername] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [error, setError] = useState<string>();
  function handleStart() {
    if (username.length > 0) {
      setIsStarted(true);
      modal.current?.close();
      return;
    }
    setError("username must be greater than 0");
  }
  function handleChangeOfUsername(value: ChangeEvent<HTMLInputElement>) {
    setUsername(value.target.value);
    setError(undefined);
  }
  return (
    <main>
      <dialog ref={modal} className="modal">
        <div className="modal-box flex flex-col justify-center items-center gap-4">
          <h3 className="font-bold text-lg">What's your name?</h3>
          <input
            value={username}
            onChange={handleChangeOfUsername}
            type="text"
            placeholder="Name.."
            className="input input-bordered input-primary border-black w-full max-w-xs"
          />
          {error && <p>{error}</p>}
          <div>
            <button
              onClick={handleStart}
              className="btn btn-outline btn-success"
            >
              Let's Start
            </button>
          </div>
        </div>
      </dialog>
    </main>
  );
}
