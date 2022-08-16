import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  Plus,
  Users,
  MessageCircle,
  Search,
  MoreHorizontal,
  Edit2,
  Trash,
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
  Mail,
  Instagram,
  Shield,
  Settings,
  HelpCircle,
  LogOut,
  Edit,
  Trash2,
} from "lucide-react";
import keanu from "../../assets/images/keanu.jpg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// const numbers = [...Array(10).keys()];
const users = [
  {
    id: 1,
    name: "Tom Hank",
    job: "Pengawas Bendungan",
    email: "tom@gmail.com",
    role: "admin",
  },
  {
    id: 2,
    name: "Russel Crowe",
    job: "Mandor",
    email: "russel@gmail.com",
    role: "member",
  },
  {
    id: 3,
    name: "Keira Knightley",
    job: "Designer",
    email: "keira@gmail.com",
    role: "member",
  },
  {
    id: 4,
    name: "John Travolta",
    job: "Developer",
    email: "john@gmail.com",
    role: "member",
  },
  {
    id: 5,
    name: "Christian Bale",
    job: "Programmer",
    email: "chiristian@gmail.com",
    role: "member",
  },
  {
    id: 6,
    name: "Angelina Jolie",
    job: "Pengukur",
    email: "angelina@gmail.com",
    role: "member",
  },
  {
    id: 7,
    name: "Keira Knightley",
    job: "Pengukur",
    email: "kei@gmail.com",
    role: "member",
  },
  {
    id: 8,
    name: "Tom Hank",
    job: "Pengawas Bendungan",
    email: "tom@gmail.com",
    role: "admin",
  },
  {
    id: 9,
    name: "Russel Crowe",
    job: "Mandor",
    email: "russel@gmail.com",
    role: "member",
  },
  {
    id: 10,
    name: "Keira Knightley",
    job: "Designer",
    email: "keira@gmail.com",
    role: "member",
  },
];

const userList = users.map((user) => (
  <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 dark:text-light">
    <div className="relative rounded-md bg-light dark:bg-dark">
      <div className="p-3 relative">
        <Menu
          as="div"
          className="absolute top-0 right-3 inline-block text-right"
        >
          <div>
            <Menu.Button>
              <MoreHorizontal className="w-6 h-6 text-slate-500" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="z-500 w-44 bg-light dark:bg-dark border border-slate-200 dark:border-water-theme theme origin-top-right absolute right-0 rounded-md shadow-lg focus:outline-none">
              <div className="z-500">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href=""
                      className={classNames(
                        active ? "bg-slate-300 text-gray-900 rounded-md" : "",
                        "block"
                      )}
                    >
                      <div className="flex items-center px-4 py-2 text-sm text-secondary">
                        <div>
                          <Edit className="w-4 h-4" />
                        </div>
                        <div className="ml-1">Edit</div>
                      </div>
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href=""
                      className={classNames(
                        active ? " bg-slate-300 text-gray-900 rounded-md" : "",
                        "block"
                      )}
                    >
                      <div className="flex items-center px-4 py-2 text-sm text-danger">
                        <div>
                          <Trash2 className="w-4 h-4" />
                        </div>
                        <div className="ml-1">Delete</div>
                      </div>
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <div className="w-full flex mt-1">
          <div
            className="rounded-full mt-2 w-16 h-16 bg-center bg-cover"
            style={{ backgroundImage: `url(${keanu})` }}
          ></div>
          <div className="ml-3">
            <a href="" className="">
              {user.name}
            </a>
            <div className="text-sm">({user.role})</div>
            <div className="text-sm">{user.job}</div>
            <div className="flex items-center text-sm">
              <Mail className="w-4 h-4" />
              <a href="mailto:{user.email}" className="ml-1">
                {user.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

function User() {
  return (
    <>
      <div className="bg-water-nav text-water-nav border-b border-water-theme flex w-full  p-0 h-14 items-center px-1.5">
        <div className="mx-2 w-full">Users</div>
      </div>
      {/* topbar h-14=3.5rem, breadscrumb h-14=3.5rem, footer h-7=1.75rem*/}
      <div
        className={`bg-water-base text-slate-600 h-[calc(100vh-8.75rem)] w-full`}
      >
        {/* BEGIN: Users Layout */}
        <div className="h-full overflow-auto">
          <div className="grid grid-cols-12 gap-3 p-3">
            {userList}
            {/* pagination */}
            <div className="relative col-span-12 flex flex-wrap items-center mt-1">
              <nav className="block w-full left-0 right-0 mx-auto text-center">
                <ul class="inline-flex -space-x-px">
                  <li>
                    <a
                      href="#"
                      class="py-1 px-2 ml-0 leading-tight text-gray-500 bg-light rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Prev
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="py-1 px-2 leading-tight text-gray-500 bg-light border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="py-1 px-2 leading-tight text-gray-500 bg-light border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      class="py-1 px-2 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="py-1 px-2 leading-tight text-gray-500 bg-light border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="py-1 px-2 leading-tight text-gray-500 bg-light border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="py-1 px-2 leading-tight text-gray-500 bg-light rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-dark dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
              {/* <select className="w-20 form-select box">
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </select> */}
            </div>
            {/* end of pagination */}
          </div>
        </div>
        {/* END: Users Layout */}
      </div>
    </>
  );
}

export default User;
