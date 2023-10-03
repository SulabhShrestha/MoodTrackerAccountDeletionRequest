function App() {
  const date = new Date();
  return (
    <section className="h-[100vh] flex flex-col">
      <main className="flex-grow">
        <h1 className="font-extrabold text-4xl text-center bg-gray-100 py-4 text-app-green">
          Account Deletion Request
        </h1>
        <p className="mx-[4vw] my-8">
          Hello, valued user of{" "}
          <span className="font-bold text-app-green">Mood Tracker</span>, <br />
          <br />
          We respect your privacy and provide you with the option to request the
          deletion of your account and associated data. To initiate this
          process, please follow these steps: <br />
          <br />
          1. Send an email to{" "}
          <a
            href="mailto:professionalsulabh@gmail.com"
            className="underline text-app-yellow"
          >
            professionalsulabh@gmail.com
          </a>{" "}
          from the email address associated with your account. <br />
          2. In the subject line, please mention "Account Deletion Request."{" "}
          <br />
          3. Specify the types of data you would like to have deleted, if any,
          and any additional retention period you'd like to discuss. <br />{" "}
          <br />
          Our team will promptly process your request and provide confirmation
          once your account and data have been deleted according to your
          preferences.
          <br />
          <br />
          Thank you for using our app, and we appreciate your trust in us.
          <br />
          <br />
          Best regards, <br />
          Sulah Shrestha [Mood Tracker]
        </p>
      </main>

      <footer className="flex justify-center items-center bg-gray-100 py-4">
        <p className="text-app-green">
          &copy; {date.getFullYear()} Mood Tracker. All rights reserved.
        </p>
      </footer>
    </section>
  );
}

export default App;
