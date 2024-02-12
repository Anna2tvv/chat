"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const modal = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    modal.current?.showModal();
  });
  const [username, setUsername] = useState("");
  return (
    <main>
      <dialog ref={modal} className="modal">
        <div className="modal-box flex flex-col justify-center items-center gap-4">
          <h3 className="font-bold text-lg">What's your name?</h3>
          <input
            value={username}
            onChange={(value) => setUsername(value.target.value)}
            type="text"
            placeholder="Name.."
            className="input input-bordered input-primary border-black w-full max-w-xs"
          />
          <div>
            <button className="btn btn-outline btn-success">Let's Start</button>
          </div>
        </div>
      </dialog>
    </main>
  );
}
