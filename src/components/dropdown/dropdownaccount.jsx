import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { 
  BarChart2,
  Shield,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react'
import keanu from '../../assets/images/keanu.jpg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function DropdownAccount() {
  return (
    <Menu as="div" className="float-right inline-block text-right">
      <div>
        <Menu.Button>
          {/* <BarChart2 className='className="w-6 h-6 text-white transform -rotate-90' /> */}
          <div className='mx-auto rounded-full w-10 h-10 border border-water-theme bg-center bg-cover mt-1' 
            style={{ backgroundImage: `url(${keanu})`}}>
          </div>
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
        <Menu.Items className="z-500 dropdownmenu text-water-nav bg-water-dd border border-water-theme origin-top-right absolute right-3 w-60 rounded-md shadow-lg focus:outline-none">
          <div className="z-500">
            <Menu.Item>
              <div className='relative items-center px-4 py-2'>
                <div className='mx-auto rounded-full w-16 h-16 bg-center bg-cover' 
                  style={{ backgroundImage: `url(${keanu})`}}>
                </div>
                <div className='text-center text-md font-semibold'>
                Umar Said Habibulloh
                </div>
                <div className='text-center text-sm'>
                @theonlyumarsaid
                </div>
                <div className='text-center text-sm'>
                Kepala Pengawas Bendungan
                </div>
                <div className='text-center text-sm'>
                grup : Admin
                </div>
              </div>
            </Menu.Item>
            <div className='border-y border-water-theme px-4 py-2 text-sm'>
            <form  method="POST" action="#" className='my-0 mx-auto w-3/4'>
            <Menu.Item>
                <div className='flex items-center'>
                  <input
                    type="radio"
                    name="idn"
                    id='idn'
                    checked="checked"
                  />
                  <label className="ml-1">Indonesia</label>
                  <input className='ml-3'
                    type="radio"
                    name="eng"
                    id='eng'
                  />
                  <label className="ml-1">English</label>
                </div>
            </Menu.Item>
            </form>
            </div>
            <Menu.Item>
            {({ active }) => (
              <a
                href="/admin-dashboards"
                className={classNames(
                  active ? 'bg-slate-300 text-gray-900' : '',
                  'block'
                )}
              >
              <div className='flex items-center px-4 py-2 text-sm'>
                <div><Shield className="w-4 h-4" /></div>
                <div className='ml-1'>Admin Dashboard</div>
              </div>
              </a>
            )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
              <a
                href="/settings"
                className={classNames(
                  active ? ' bg-slate-300 text-gray-900' : '',
                  'block'
                )}
              >
              <div className='flex items-center px-4 py-2 text-sm'>
                <div><Settings className="w-4 h-4" /></div>
                <div className='ml-1'>Setelan</div>
              </div>
              </a>
            )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
              <a
                href="/faqs"
                className={classNames(
                  active ? ' bg-slate-300 text-gray-900' : '',
                  'block'
                )}
              >
              <div className='flex items-center px-4 py-2 text-sm'>
                <div><HelpCircle className="w-4 h-4" /></div>
                <div className='ml-1'>FAQ dan Terms</div>
              </div>
              </a>
            )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
              {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? ' bg-slate-300 text-gray-900' : '',
                  'block'
                )}
              >
                <div className='flex items-center px-4 pt-2 pb-4 text-sm'>
                <div><LogOut className="w-4 h-4" /></div>
                <div><button type="submit" className='ml-1'>Logout</button></div>
                </div>
              </a>
              )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default DropdownAccount;
