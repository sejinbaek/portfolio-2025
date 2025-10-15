"use client";

import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("소중한 의견을 보내주셔서 감사합니다!", {
        icon: null,
        style: {
          background: "#262626",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "8px",
          border: "none",
        },
      });
    }
  }, [state.succeeded]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    formRef.current?.reset();
  };

  return (
    <div className="w-full min-[400px]:w-xs md:w-96 lg:w-128 rounded-2xl bg-neutral-100 p-8 lg:p-10">
      <form
        onSubmit={onSubmit}
        ref={formRef}
        className="space-y-5 md:space-y-7 lg:space-y-9"
      >
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Your name"
          required
          className="font-light w-full bg-transparent text-sm min-[400px]:text-base lg:text-xl placeholder:text-neutral-400 border-0 border-b outline-none focus:outline-none focus:border-b-2 border-neutral-300 focus:border-neutral-700 focus:ring-0"
        />

        <label className="sr-only" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email address"
          required
          className="font-light w-full bg-transparent text-sm min-[400px]:text-base lg:text-xl placeholder:text-neutral-400 border-0 border-b outline-none focus:outline-none focus:border-b-2 border-neutral-300 focus:border-neutral-700 focus:ring-0"
        />

        <div className="space-y-1">
          <label
            htmlFor="message"
            className="block text-sm min-[400px]:text-base lg:text-xl font-light text-neutral-800"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full h-24 rounded-lg text-sm min-[400px]:text-base lg:text-xl bg-white border border-neutral-200 p-3 resize-none
                 focus:outline-none focus:border-neutral-800 focus:border-2"
          />
        </div>

        <button
          disabled={state.submitting}
          className="w-full rounded-lg bg-neutral-900 py-3 text-white text-base min-[400px]:text-xl font-medium disabled:opacity-50"
        >
          {state.submitting ? "Sending..." : "Send a message"}
        </button>

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </form>
    </div>
  );
}
