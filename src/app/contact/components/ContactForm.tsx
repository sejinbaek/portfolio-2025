"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!);
  if (state.succeeded)
    return <p className="text-green-600">Thanks! I’ll reply soon.</p>;

  return (
    <div className="max-w-sm rounded-2xl bg-neutral-100 p-7">
      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Your name"
          required
          className="font-light w-full bg-transparent text-sm min-[400px]:text-base placeholder:text-neutral-400 border-0 border-b outline-none focus:outline-none border-neutral-300 focus:border-neutral-700 focus:ring-0"
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
          className="font-light w-full bg-transparent text-sm min-[400px]:text-base placeholder:text-neutral-400 border-0 border-b outline-none focus:outline-none border-neutral-300 focus:border-neutral-700 focus:ring-0"
        />

        <div className="space-y-1">
          <label
            htmlFor="message"
            className="block text-sm min-[400px]:text-base font-light text-neutral-800"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full h-24 rounded-lg bg-white border border-neutral-200 p-3
                 focus:outline-none focus:ring-2 focus:ring-neutral-300"
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
