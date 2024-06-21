import { XCircleIcon, PlusIcon } from '@heroicons/react/20/solid';

export default function AddSection ({showDialog, handleDialog, toggleSection}: {showDialog: boolean, handleDialog: () => void, toggleSection: (section: boolean) => void}) {

  return (
    <div className='flex justify-center'>

            {/*============== Create Resume Dialog Form ============== */}
            <dialog open={showDialog} className='h-80 w-1/2 rounded-3xl border-4 border-home-hover' id="dialog" >
                
                    <div className='bg-home text-white p-4 flex justify-between'>
                        <h1 className='text-xl'>Create a New Resume</h1>
                        <XCircleIcon className='h-8 hover:cursor-pointer hover:text-red-500' onClick={handleDialog}/>
                    </div>
                    <div className='m-4'>
                        <label className='text-lg'>New Section</label>
                        <select className='border-2 border-home w-full rounded-2xl p-2'>
                            <option>Template 1</option>
                            <option>Template 2</option>
                            <option>Template 3</option>
                        </select>
                        <br/>
                        <button className='bg-home hover:bg-home-hover flex flex-row justify-center text-white p-2 rounded-2xl w-full mt-4'>Create Resume <PlusIcon className=' ml-1 h-6'/></button>
                    </div>
            </dialog>
          </div>
  );
}