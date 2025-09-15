import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 border-t border-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-6 text-sm">
        <div>© 2022 CryptoNews</div>
        <div className="flex gap-4">
          <a href="#">About</a>
          <a href="#">Contact Policy</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
        <div className="flex gap-4">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer

// import React from 'react'

// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-gray-900 border-t border-gray-700 fixed bottom-0 w-full">
//         <div className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-6 text-sm text-gray-300">
//           <div>© 2025 CryptoNews</div>
//           <div className="flex gap-4 justify-center">
//             <a href="#">About</a>
//             <a href="#">Contact Policy</a>
//             <a href="#">Privacy Policy</a>
//             <a href="#">Terms</a>
//           </div>
//           <div className="flex gap-4 justify-end">
//             <a href="#">Twitter</a>
//             <a href="#">LinkedIn</a>
//             <a href="#">Facebook</a>
//           </div>
//         </div>
//       </footer>
//     </>
//   )
// }

// export default Footer
