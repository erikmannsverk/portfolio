import Footer from "../components/Footer"
import { NavbarDefault } from "../components/NavbarDefault"
import ScrollToTop from "../assets/ScrollToTop"

// Messages from the form are sent to this address.
const MY_EMAIL = "mannsverkerik@gmail.com"

const inputClass =
  "w-full bg-white rounded border border-gray-300 focus:border-blue-600 text-base outline-none text-gray-700 py-1 px-3 leading-8"

function Contact() {
  return (
    <>
      <ScrollToTop />
      <NavbarDefault />

      <div className="flex flex-col text-center w-full mb-12 py-24">
        <h1 className="block lg:text-5xl my-2 font-bold text-gray-800 text-3xl">
          Contact Me <span className="text-blue-600">.</span>
        </h1>
        <p className="lg:w-1/3 w-2/3 text-sm mx-auto leading-relaxed lg:text-base">
          Send me a message with this form, or email me at {MY_EMAIL}.
        </p>
        <div className="flex justify-center mt-5">
          <a target="_blank" href="https://github.com/erikmannsverk" className="opacity-60 hover:opacity-80">
            <img src="/images/github.png" alt="GitHub" className="mx-2 h-5 w-5" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/erik-mannsverk/" className="opacity-60 hover:opacity-80">
            <img src="/images/linkedin.png" alt="LinkedIn" className="mx-2 h-5 w-5" />
          </a>
        </div>
      </div>

      <form
        action={`https://formsubmit.co/${MY_EMAIL}`}
        method="POST"
        className="lg:w-1/2 w-2/3 mx-auto flex flex-col gap-4 pb-16"
      >
        <input type="hidden" name="_subject" value="New message from your portfolio" />

        <label className="text-sm text-gray-600">
          Name
          <input type="text" name="name" required className={inputClass} />
        </label>

        <label className="text-sm text-gray-600">
          Email
          <input type="email" name="email" required className={inputClass} />
        </label>

        <label className="text-sm text-gray-600">
          Message
          <textarea name="message" required className={inputClass + " h-32 resize-none"} />
        </label>

        <button type="submit" className="self-center px-6 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
          Send
        </button>
      </form>

      <Footer />
    </>
  )
}

export default Contact
