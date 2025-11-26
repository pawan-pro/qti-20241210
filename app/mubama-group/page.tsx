import Link from 'next/link';

export default function MubamaGroupPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8 flex justify-center">
             {/* Logo */}
             <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/deck/Mubama_logo.png" alt="Mubama Logo" className="w-24 h-auto" />
             </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Mubama Quant Interview</h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">Candidate: Pawan Jatale</p>
          <p className="mt-2 text-blue-400 font-medium uppercase tracking-wider">Quantitative Developer Position</p>
          
          <div className="mt-10">
            <Link href="/deck/presentation.html" className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1">
              View Presentation Deck
            </Link>
          </div>
        </div>
      </section>

      {/* Agenda / Content */}
      <section className="py-16 container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* About Me */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="w-2 h-8 bg-blue-500 mr-3 rounded-full"></span>
              About Me
            </h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Experienced Quantitative Developer with a strong background in:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Systematic Trading Systems
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Machine Learning & Optimization
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                High-Performance Computing (C++/Python)
              </li>
            </ul>
          </div>

          {/* Technical Stack */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
              <span className="w-2 h-8 bg-purple-500 mr-3 rounded-full"></span>
              Technical Stack
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li className="border-b border-gray-50 pb-2">
                <strong className="text-slate-900 block mb-1">Languages</strong> 
                <span className="text-gray-600">C++, Python, SQL, JavaScript</span>
              </li>
              <li className="border-b border-gray-50 pb-2">
                <strong className="text-slate-900 block mb-1">Tools</strong> 
                <span className="text-gray-600">Docker, Kubernetes, AWS, Git</span>
              </li>
              <li>
                <strong className="text-slate-900 block mb-1">Protocols</strong> 
                <span className="text-gray-600">FIX, WebSocket, REST/gRPC</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Projects */}
        <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-8 text-slate-800 flex items-center">
            <span className="w-2 h-8 bg-orange-500 mr-3 rounded-full"></span>
            Key Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="group">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Helios System</h3>
              <p className="text-gray-600 leading-relaxed">
                Developed a high-frequency trading platform handling massive data throughput with low latency. Optimized for microsecond-level execution.
              </p>
            </div>
            <div className="group">
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Macro Regime Modeling</h3>
              <p className="text-gray-600 leading-relaxed">
                Implemented dynamic factor rotation strategies using advanced statistical methods and machine learning models to adapt to changing market conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Why Mubama */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 p-10 rounded-2xl text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Why Mubama?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            "Excited to contribute to a world-class quantitative team and solve complex financial challenges in a dynamic environment."
          </p>
        </div>

      </section>
    </main>
  );
}
