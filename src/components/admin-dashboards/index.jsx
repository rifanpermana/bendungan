import { 
  Users,
  Waves,
  Component,
  BellRing,
  Radio
} from 'lucide-react'

export default function AdminDashboard() {
  return (
    <>
    <div className="bg-water-nav text-water-nav border-b border-water-theme flex w-full  p-0 h-7 items-center px-1.5">
      <div className="mx-2 w-full">
        test
      </div>
    </div>
    {/* topbar h-14=3.5rem, breadscrumb h-7=1.75rem, footer h-7=1.75rem*/}
    <div className={`bg-water-base text-water-base h-[calc(100vh-7rem)] w-full `}>
      <div className="h-full overflow-auto p-3">     
        <div className='flex items-center border-b border-water-base pt-1'>
          <div><Users className="w-4 h-4" /></div>
          <div className='ml-1'>Pengguna</div>
        </div>
        <div className='border-b border-water-base pt-1'>Index Pengguna</div>
        <div className='border-b border-water-base pt-1'>Tambah Pengguna</div>
        <div className='flex items-center border-b border-water-base pt-1'>
          <div><Waves className="w-4 h-4" /></div>
          <div className='ml-1'>Bendungan</div>
        </div>
        <div className='border-b border-water-base pt-1'>Index Bendungan</div>
        <div className='border-b border-water-base pt-1'>Tambah Bendungan</div>
        <div className='flex items-center border-b border-water-base pt-1'>
          <div><Component className="w-4 h-4" /></div>
          <div className='ml-1'>Grup Bendungan</div>
        </div>
        <div className='border-b border-water-base pt-1'>Index Grup Bendungan</div>
        <div className='border-b border-water-base pt-1'>Tambah Bendungan</div>
        <div className='flex items-center border-b border-water-base pt-1'>
          <div><BellRing className="w-4 h-4" /></div>
          <div className='ml-1'>Notifikasi Resiko</div>
        </div>
        <div className='border-b border-water-base pt-1'>Index Notifikasi Resiko</div>
        <div className='border-b border-water-base pt-1'>Tambah Notifikasi Resiko</div>
        <div className='flex items-center border-b border-water-base pt-1'>
          <div><Radio className="w-4 h-4" /></div>
          <div className='ml-1'>Alat</div>
        </div>
        <div className='border-b border-water-base pt-1'>Index Alat</div>
        <div className='border-b border-water-base pt-1'>Tambah Alat</div>
      </div>
    </div>
    
    </>
  )
}
