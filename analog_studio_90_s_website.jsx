import React from "react";

export default function AnalogStudio90s() {
  return (
    <div
      className="min-h-screen text-black"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
        backgroundColor: "#000080",
        fontFamily: "Courier New, monospace",
      }}
    >
      {/* Top Banner */}
      <div className="text-center py-6 border-b-4 border-yellow-300 bg-black text-yellow-300">
        <h1 className="text-4xl font-bold tracking-widest">
          🎛️ ANALOG UNDERGROUND RECORDING 🎛️
        </h1>
        <p className="mt-2 text-sm">Est. 1998 – 100% TAPE – NO COMPUTERS</p>
        <blink className="text-red-500 text-lg font-bold">
          NOW BOOKING SESSIONS!!!
        </blink>
      </div>

      {/* Layout Table (very 90s) */}
      <div className="flex justify-center py-10">
        <table className="border-4 border-pink-500 bg-gray-200 text-black w-11/12 max-w-5xl">
          <tbody>
            <tr>
              {/* Sidebar */}
              <td className="border-2 border-blue-700 bg-cyan-200 p-4 align-top w-1/4">
                <p className="font-bold underline mb-3">Navigation</p>
                <ul className="space-y-2 text-blue-900">
                  <li>🏠 Home</li>
                  <li>🎚️ Studio</li>
                  <li>📼 Gear</li>
                  <li>💵 Rates</li>
                  <li>📞 Contact</li>
                  <li>📝 Guestbook</li>
                </ul>

                <hr className="my-4 border-black" />

                <p className="font-bold">Visitor Counter</p>
                <div className="bg-black text-green-400 font-bold text-center mt-2 p-2">
                  00034721
                </div>

                <hr className="my-4 border-black" />

                <p className="text-xs">
                  Best viewed in Netscape Navigator 4.0 at 800x600 resolution.
                </p>
              </td>

              {/* Main Content */}
              <td className="border-2 border-blue-700 p-6 bg-white">
                <marquee className="text-purple-700 font-bold mb-4">
                  ★ REAL DRUMS ★ REAL AMPS ★ REAL TAPE SATURATION ★
                </marquee>

                <h2 className="text-2xl font-bold text-red-600 mb-4">
                  Welcome to the Analog Underground
                </h2>

                <p className="mb-4">
                  We record bands the way it was meant to be done. 2" 24-track
                  tape machine. Vintage console. Zero plugins. Zero autotune.
                </p>

                <p className="mb-4">
                  Bring your drummer. Bring your amps. Bring your attitude.
                  We’ll supply the tape hiss.
                </p>

                <center>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Reel-to-reel_audio_tape_recorder.jpg"
                    alt="Tape Machine"
                    className="border-4 border-black"
                    width="300"
                  />
                </center>

                <hr className="my-6 border-black" />

                <h3 className="text-xl font-bold text-blue-700 mb-2">
                  Studio Highlights
                </h3>

                <ul className="list-disc ml-6">
                  <li>24-Track 2" Analog Tape Machine</li>
                  <li>Vintage British Console</li>
                  <li>Classic Tube Compressors</li>
                  <li>Spring & Plate Reverb</li>
                </ul>

                <hr className="my-6 border-black" />

                <center>
                  <button className="bg-yellow-300 border-2 border-black px-6 py-2 font-bold hover:bg-red-500">
                    ENTER THE STUDIO
                  </button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="text-center py-6 bg-black text-white border-t-4 border-yellow-300">
        <p>© 1998–2003 Analog Underground Recording</p>
        <marquee scrollAmount="3" className="text-green-400 text-sm">
          No MIDI. No Editing. No Mercy.
        </marquee>
      </div>
    </div>
  );
}
