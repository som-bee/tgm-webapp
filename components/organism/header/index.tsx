'use client'
import React from 'react'
import Link from 'next/link'
import { headerData } from '@/data/headerData'
import useMode from '@/utils/themeMode'
import MobileNav from './MobileNav'

/**
 * Our Header is a reusable UI component that used to represent top navbar section of any website.
 *
 * @property website logo, all page title with navigation link, search field  and a theme changing button.
 *
 * @returns React component that can be easily integrated into any web application.
 */
const Header = () => {
   const { theme, setTheme, themes, hydrationError } = useMode()
   

   const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false)

   return (
      <header className="py-5">
         <div className="container mx-auto font-work">
            <div className="navbar grid grid-cols-12">
               {/* <div className="col-span-3">
                  <Link href={`/`}>
                     <Logo className={`text-base-content`} />
                  </Link>
               </div> */}
               <div className="col-span-3 flex items-center">
                  <Link href={`/`} className="flex items-center">
                     <img src="./logo.png" alt="Green Mates Logo" className="h-12 w-auto mr-0 mb-4" />
                     <span className="text-base-content text-xl font-semibold">Green Mates</span>
                  </Link>
               </div>
               <nav className="hidden xl:block col-span-6">
                  <div className=" w-full flex items-center justify-center gap-10">
                     {headerData.map((item: any, index: number) => (
                        <div key={index}>
                           <Link
                              href={item.link}
                              className="link link-hover text-base text-base-content/80 hover:text-primary transition hover:duration-300"
                           >
                              {item.name}
                           </Link>
                        </div>
                     ))}
                  </div>
               </nav>
               <div className="flex items-center justify-end xl:justify-center gap-10 col-span-9 xl:col-span-3">
                  {/* Search Block */}
                  <div className="bg-base-200 pl-4 pr-3 py-2 rounded-md hidden sm:flex items-center gap-4">
                     <input
                        type="text"
                        className="outline-none text-base-content bg-base-200 w-28 placeholder:font-work"
                        placeholder="Search"
                     />
                     <div>
                        <svg
                           className="cursor-pointer"
                           width="16"
                           height="16"
                           viewBox="0 0 16 16"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                              stroke="#52525B"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                           />
                           <path
                              d="M10.5715 10.5716L14 14"
                              stroke="#52525B"
                              strokeWidth="1.5"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                           />
                        </svg>
                     </div>
                  </div>
                  {/* Theme Switcher */}
                  {/* <input
                     type="checkbox"
                     className={`toggle rounded-full ${!lightMode ? 'toggle-primary' : ''}`}
                     onClick={() => {
                        if (theme === 'light') {
                           setTheme('dark');
                        } else {
                           setTheme('light');
                        }
                     }}
                     defaultChecked={theme === 'dark'}
                  /> */}


                  {/*Multi themes switcher */}
                  {/* <div className="flex-none">
                     <div className="dropdown dropdown-end">
                        <label
                           tabIndex={0}
                           className="btn btn-ghost btn-circle avatar"
                        >
                           <div className="w-7 rounded-full">
                              <svg
                                 stroke="currentColor"
                                 fill="currentColor"
                                 strokeWidth="0"
                                 viewBox="0 0 512 512"
                                 className="w-7 h-7 text-base-content"
                                 height="1em"
                                 width="1em"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path d="M441 336.2l-.06-.05c-9.93-9.18-22.78-11.34-32.16-12.92l-.69-.12c-9.05-1.49-10.48-2.5-14.58-6.17-2.44-2.17-5.35-5.65-5.35-9.94s2.91-7.77 5.34-9.94l30.28-26.87c25.92-22.91 40.2-53.66 40.2-86.59s-14.25-63.68-40.2-86.6c-35.89-31.59-85-49-138.37-49C223.72 48 162 71.37 116 112.11c-43.87 38.77-68 90.71-68 146.24s24.16 107.47 68 146.23c21.75 19.24 47.49 34.18 76.52 44.42a266.17 266.17 0 0086.87 15h1.81c61 0 119.09-20.57 159.39-56.4 9.7-8.56 15.15-20.83 15.34-34.56.21-14.17-5.37-27.95-14.93-36.84zM112 208a32 32 0 1132 32 32 32 0 01-32-32zm40 135a32 32 0 1132-32 32 32 0 01-32 32zm40-199a32 32 0 1132 32 32 32 0 01-32-32zm64 271a48 48 0 1148-48 48 48 0 01-48 48zm72-239a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                              </svg>
                           </div>
                        </label>
                        <ul
                           tabIndex={0}
                           className="grid dropdown-content p-3 shadow-lg mt-5 bg-base-200 rounded-lg w-52 max-h-80 overflow-x-auto"
                        >
                           {themes.map((item) => (
                              <li
                                 data-theme={item}
                                 key={item}
                                 className={`capitalize w-full flex mb-2 rounded-md last-of-type:mb-0 justify-between items-center px-2 py-2 hover:bg-base-300 transition-all duration-300 cursor-pointer`}
                                 onClick={() => {
                                    setTheme(item)
                                 }}
                              >
                                 <span className="text-base-content flex items-center gap-2">
                                    {hydrationError && theme === item && (
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          className="w-3 h-3 text-primary"
                                       >
                                          <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                                       </svg>
                                    )}
                                    {item}
                                 </span>
                                 <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                                    <div className="bg-primary w-2 rounded"></div>{' '}
                                    <div className="bg-secondary w-2 rounded"></div>{' '}
                                    <div className="bg-accent w-2 rounded"></div>{' '}
                                    <div className="bg-neutral w-2 rounded"></div>
                                 </div>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div> */}

                  {/* Responsive Sidebar Menu */}
                  <svg
                     onClick={() => setSidebarOpen(!sidebarOpen)}
                     className="cursor-pointer w-8 h-8 xl:hidden text-base-content"
                     width="20"
                     height="20"
                     viewBox="0 0 20 20"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M3.33301 5H16.6663M3.33301 10H16.6663M3.33301 15H16.6663"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               </div>
            </div>
            {/* Responsive Sidebar Layout */}
            <MobileNav
               sidebarOpen={sidebarOpen}
               setSidebarOpen={setSidebarOpen}
            />
         </div>
      </header>
   )
}

// Header logo svg component
export const Logo = ({ ...props }) => (
   <svg
      width="158"
      height="36"
      viewBox="0 0 158 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path
         d="M45.0024 27.8182V9.53181H46.732L53.6504 19.4973H52.6868L59.5805 9.53181H61.31V27.8182H59.3334V12.1827L59.9758 12.4282L53.2057 22.1727H53.1068L46.3614 12.4282L46.9791 12.1827V27.8182H45.0024Z"
         fill="currentColor"
      />
      <path
         d="M71.4143 28.1127C70.1789 28.1127 69.0587 27.8182 68.0539 27.2291C67.0656 26.6236 66.2831 25.7973 65.7066 24.75C65.1301 23.7027 64.8418 22.5164 64.8418 21.1909C64.8418 19.8655 65.1218 18.6955 65.6819 17.6809C66.242 16.65 66.9997 15.84 67.9551 15.2509C68.927 14.6618 70.0141 14.3673 71.2166 14.3673C72.172 14.3673 73.0203 14.5473 73.7616 14.9073C74.5193 15.2509 75.1617 15.7255 75.6888 16.3309C76.216 16.92 76.6195 17.5909 76.8996 18.3436C77.1796 19.08 77.3196 19.8409 77.3196 20.6264C77.3196 20.79 77.3114 20.9782 77.2949 21.1909C77.2784 21.3873 77.2537 21.5918 77.2208 21.8045H66.0278V20.0864H76.1583L75.2688 20.8227C75.4171 19.9227 75.31 19.1209 74.9476 18.4173C74.6017 17.6973 74.0993 17.1327 73.4404 16.7236C72.7815 16.2982 72.0402 16.0855 71.2166 16.0855C70.393 16.0855 69.627 16.2982 68.9187 16.7236C68.2269 17.1491 67.6833 17.7464 67.288 18.5155C66.8926 19.2682 66.7361 20.1682 66.8185 21.2155C66.7361 22.2627 66.9009 23.1791 67.3127 23.9645C67.7409 24.7336 68.3175 25.3309 69.0423 25.7564C69.7835 26.1818 70.5742 26.3945 71.4143 26.3945C72.3861 26.3945 73.2015 26.1655 73.8604 25.7073C74.5193 25.2491 75.0547 24.6764 75.4665 23.9891L77.0478 24.8236C76.7843 25.4127 76.3807 25.9609 75.8371 26.4682C75.2935 26.9591 74.6429 27.36 73.8851 27.6709C73.1439 27.9655 72.3203 28.1127 71.4143 28.1127Z"
         fill="currentColor"
      />
      <path
         d="M85.6522 27.9655C84.4662 27.9655 83.5519 27.6218 82.9095 26.9345C82.2671 26.2473 81.9459 25.2655 81.9459 23.9891V16.5027H79.4997V14.6618H80.1175C80.6775 14.6618 81.1223 14.4818 81.4517 14.1218C81.7812 13.7455 81.9459 13.2791 81.9459 12.7227V11.6182H83.799V14.6618H86.7146V16.5027H83.799V23.9891C83.799 24.4309 83.8649 24.8236 83.9967 25.1673C84.1285 25.4945 84.3508 25.7564 84.6638 25.9527C84.9933 26.1491 85.4298 26.2473 85.9734 26.2473C86.1052 26.2473 86.2616 26.2391 86.4428 26.2227C86.624 26.2064 86.7805 26.19 86.9123 26.1736V27.8182C86.7146 27.8673 86.4923 27.9 86.2452 27.9164C85.9981 27.9491 85.8004 27.9655 85.6522 27.9655Z"
         fill="currentColor"
      />
      <path
         d="M93.7548 28.1127C92.9147 28.1127 92.1652 27.9573 91.5063 27.6464C90.8474 27.3191 90.3286 26.8773 89.9497 26.3209C89.5708 25.7645 89.3814 25.1264 89.3814 24.4064C89.3814 23.7191 89.5297 23.0973 89.8262 22.5409C90.1227 21.9682 90.5839 21.4855 91.2098 21.0927C91.8358 20.7 92.6347 20.4218 93.6066 20.2582L98.7953 19.3991V21.0682L94.0513 21.8536C93.0959 22.0173 92.4041 22.32 91.9758 22.7618C91.564 23.2036 91.3581 23.7273 91.3581 24.3327C91.3581 24.9218 91.5887 25.4209 92.0499 25.83C92.5276 26.2391 93.1371 26.4436 93.8784 26.4436C94.7843 26.4436 95.575 26.2555 96.2504 25.8791C96.9257 25.4864 97.4528 24.9627 97.8317 24.3082C98.2106 23.6536 98.4 22.9255 98.4 22.1236V18.7855C98.4 18 98.1117 17.3618 97.5352 16.8709C96.9587 16.38 96.2092 16.1345 95.2867 16.1345C94.4796 16.1345 93.7713 16.3391 93.1618 16.7482C92.5523 17.1409 92.0993 17.6564 91.8028 18.2945L90.1227 17.3864C90.3697 16.83 90.7568 16.3227 91.284 15.8645C91.8275 15.4064 92.4453 15.0464 93.1371 14.7845C93.8289 14.5064 94.5455 14.3673 95.2867 14.3673C96.2586 14.3673 97.1152 14.5555 97.8564 14.9318C98.6142 15.3082 99.1989 15.8318 99.6107 16.5027C100.039 17.1573 100.253 17.9182 100.253 18.7855V27.8182H98.4V25.1918L98.6718 25.4618C98.4412 25.9527 98.0788 26.4027 97.5846 26.8118C97.1069 27.2045 96.5386 27.5236 95.8797 27.7691C95.2373 27.9982 94.529 28.1127 93.7548 28.1127Z"
         fill="currentColor"
      />
      <path
         d="M105.406 27.8182V9.53182H113.19C114.458 9.53182 115.545 9.74455 116.451 10.17C117.357 10.5955 118.049 11.2091 118.527 12.0109C119.004 12.7964 119.243 13.7536 119.243 14.8827C119.243 15.6846 119.021 16.4536 118.576 17.19C118.131 17.91 117.398 18.5155 116.377 19.0064V17.1409C117.349 17.5173 118.098 17.9673 118.625 18.4909C119.153 19.0146 119.515 19.5873 119.713 20.2091C119.91 20.8146 120.009 21.4527 120.009 22.1236C120.009 23.9236 119.408 25.3227 118.205 26.3209C117.003 27.3191 115.331 27.8182 113.19 27.8182H105.406ZM109.236 24.5046H113.634C114.409 24.5046 115.026 24.2836 115.488 23.8418C115.949 23.4 116.179 22.8273 116.179 22.1236C116.179 21.4036 115.949 20.8227 115.488 20.3809C115.026 19.9391 114.409 19.7182 113.634 19.7182H109.236V24.5046ZM109.236 16.4046H113.461C114.054 16.4046 114.524 16.2409 114.87 15.9136C115.232 15.57 115.413 15.12 115.413 14.5636C115.413 14.0073 115.232 13.5655 114.87 13.2382C114.524 12.8946 114.054 12.7227 113.461 12.7227H109.236V16.4046Z"
         fill="currentColor"
      />
      <path
         d="M122.194 27.8182V9.23728H125.9V27.8182H122.194Z"
         fill="currentColor"
      />
      <path
         d="M135.309 28.1127C133.974 28.1127 132.755 27.81 131.652 27.2046C130.565 26.5991 129.691 25.7727 129.033 24.7255C128.39 23.6618 128.069 22.4591 128.069 21.1173C128.069 19.7591 128.39 18.5564 129.033 17.5091C129.691 16.4618 130.565 15.6355 131.652 15.03C132.755 14.4246 133.974 14.1218 135.309 14.1218C136.643 14.1218 137.854 14.4246 138.941 15.03C140.028 15.6355 140.893 16.4618 141.535 17.5091C142.194 18.5564 142.523 19.7591 142.523 21.1173C142.523 22.4591 142.194 23.6618 141.535 24.7255C140.893 25.7727 140.028 26.5991 138.941 27.2046C137.854 27.81 136.643 28.1127 135.309 28.1127ZM135.309 24.7991C135.984 24.7991 136.569 24.6436 137.063 24.3327C137.573 24.0218 137.969 23.5882 138.249 23.0318C138.545 22.4755 138.694 21.8373 138.694 21.1173C138.694 20.3973 138.545 19.7673 138.249 19.2273C137.969 18.6709 137.573 18.2373 137.063 17.9264C136.569 17.5991 135.984 17.4355 135.309 17.4355C134.633 17.4355 134.04 17.5991 133.53 17.9264C133.019 18.2373 132.615 18.6709 132.319 19.2273C132.039 19.7673 131.899 20.3973 131.899 21.1173C131.899 21.8373 132.039 22.4755 132.319 23.0318C132.615 23.5882 133.019 24.0218 133.53 24.3327C134.04 24.6436 134.633 24.7991 135.309 24.7991Z"
         fill="currentColor"
      />
      <path
         d="M151.329 33.2182C150.291 33.2182 149.327 33.0464 148.438 32.7027C147.548 32.3591 146.782 31.8764 146.14 31.2546C145.514 30.6491 145.061 29.9291 144.781 29.0946L148.215 27.8918C148.397 28.5136 148.767 29.0046 149.327 29.3646C149.887 29.7246 150.555 29.9046 151.329 29.9046C151.938 29.9046 152.465 29.79 152.91 29.5609C153.355 29.3482 153.692 29.0291 153.923 28.6036C154.17 28.1782 154.294 27.6791 154.294 27.1064V24.0382L155.01 24.9218C154.549 25.6746 153.956 26.2391 153.231 26.6155C152.506 26.9755 151.658 27.1555 150.686 27.1555C149.434 27.1555 148.314 26.8773 147.326 26.3209C146.338 25.7482 145.563 24.9709 145.003 23.9891C144.443 22.9909 144.163 21.8618 144.163 20.6018C144.163 19.3418 144.443 18.2291 145.003 17.2636C145.563 16.2818 146.329 15.5127 147.301 14.9564C148.273 14.4 149.377 14.1218 150.612 14.1218C151.584 14.1218 152.432 14.3182 153.157 14.7109C153.882 15.0873 154.5 15.6682 155.01 16.4536L154.541 17.3373V14.4164H158V27.1064C158 28.2846 157.712 29.3318 157.135 30.2482C156.559 31.1809 155.768 31.9091 154.763 32.4327C153.775 32.9564 152.63 33.2182 151.329 33.2182ZM151.205 23.8173C151.831 23.8173 152.375 23.6864 152.836 23.4246C153.297 23.1627 153.651 22.7946 153.898 22.32C154.162 21.8455 154.294 21.2891 154.294 20.6509C154.294 20.0127 154.162 19.4564 153.898 18.9818C153.635 18.4909 153.272 18.1146 152.811 17.8527C152.35 17.5746 151.815 17.4355 151.205 17.4355C150.579 17.4355 150.019 17.5746 149.525 17.8527C149.047 18.1146 148.668 18.4909 148.388 18.9818C148.125 19.4564 147.993 20.0127 147.993 20.6509C147.993 21.2727 148.125 21.8209 148.388 22.2955C148.668 22.77 149.047 23.1464 149.525 23.4246C150.019 23.6864 150.579 23.8173 151.205 23.8173Z"
         fill="currentColor"
      />
      <path
         d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18C0 22.152 1.40577 25.9756 3.76732 29.021L7.73554 14.0299C9.38672 7.52344 13.6758 4.15725 20.5616 4.15725H22.936C27.7785 4.15725 31.335 8.70307 30.1698 13.4033C29.9609 14.2463 29.5702 15.0334 29.0253 15.7097L27.0045 18.2174C26.486 18.8609 26.2968 19.7092 26.493 20.5121L27.109 23.0338C27.4278 24.339 27.3695 25.708 26.941 26.9814C25.4832 31.3132 21.4227 34.231 16.8521 34.231H10.2086C12.5662 35.3648 15.2089 36 18 36Z"
         fill="currentColor"
      />
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M17.7 21.7592H14.1932C13.0747 21.7592 12.0968 22.5135 11.8129 23.5953L10.4373 28.8354H15.871C17.8811 28.8354 19.6384 27.4799 20.1487 25.5357L20.2666 25.0865C20.7082 23.4043 19.4392 21.7592 17.7 21.7592ZM16.6646 23.3514H14.759C14.1206 23.3514 13.5623 23.7814 13.3993 24.3988L12.6486 27.2432H15.6532C16.7647 27.2432 17.7364 26.4977 18.0186 25.4284L18.0838 25.1814C18.328 24.2562 17.6263 23.3514 16.6646 23.3514Z"
         fill="currentColor"
      />
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M14.9971 11.7427C15.2811 10.6609 16.2589 9.90663 17.3774 9.90663H20.8843C22.6235 9.90663 23.8925 11.5517 23.4509 13.2339L23.333 13.6831C22.8227 15.6273 21.0654 16.9828 19.0553 16.9828H13.6216L14.9971 11.7427ZM16.5836 12.5462C16.7465 11.9289 17.3049 11.4988 17.9433 11.4988H19.8489C20.8106 11.4988 21.5123 12.4036 21.2681 13.3288L21.2029 13.5758C20.9207 14.6451 19.949 15.3907 18.8375 15.3907H15.8329L16.5836 12.5462Z"
         fill="currentColor"
      />
   </svg>
)

// Site Favicon svg component
export const Favicon = ({ ...props }) => (
   <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path
         d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 29.536 1.87437 34.6342 5.0231 38.6946L10.314 18.7066C12.5156 10.0312 18.2343 5.543 27.4155 5.543H30.5814C37.038 5.543 41.78 11.6041 40.2264 17.871C39.9478 18.995 39.427 20.0446 38.7004 20.9463L36.006 24.2898C35.3146 25.1478 35.0625 26.279 35.3239 27.3494L36.1453 30.7118C36.5704 32.4521 36.4927 34.2773 35.9213 35.9752C33.9775 41.751 28.5636 45.6413 22.4695 45.6413H13.6115C16.755 47.153 20.2786 48 24 48Z"
         fill="currentColor"
      />
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M23.6 29.0123H18.9242C17.4329 29.0123 16.1291 30.018 15.7505 31.4604L13.9165 38.4472H21.1614C23.8415 38.4472 26.1845 36.6398 26.865 34.0476L27.0222 33.4487C27.611 31.2057 25.919 29.0123 23.6 29.0123ZM22.2195 31.1351H19.6787C18.8274 31.1351 18.083 31.7086 17.8658 32.5317L16.8649 36.3243H20.871C22.353 36.3243 23.6486 35.3303 24.0248 33.9045L24.1118 33.5752C24.4373 32.3415 23.5017 31.1351 22.2195 31.1351Z"
         fill="currentColor"
      />
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M19.9962 15.657C20.3748 14.2145 21.6786 13.2088 23.1699 13.2088H27.8457C30.1647 13.2088 31.8566 15.4023 31.2679 17.6452L31.1107 18.2441C30.4302 20.8364 28.0872 22.6437 25.4071 22.6437H18.1622L19.9962 15.657ZM22.1115 16.7282C22.3287 15.9052 23.0731 15.3317 23.9244 15.3317H26.4652C27.7474 15.3317 28.683 16.5381 28.3575 17.7717L28.2705 18.1011C27.8943 19.5268 26.5987 20.5209 25.1167 20.5209H21.1106L22.1115 16.7282Z"
         fill="currentColor"
      />
   </svg>
)
export default Header