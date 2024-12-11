// app/contact/page.tsx
export default function Contact() {
  return (
    <div>
      <h1>We would like to hear from you</h1>
      <p>Please reach us at info@quantwater.tech</p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}