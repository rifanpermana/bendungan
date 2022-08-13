function List() {
  return (
    <>
      <div className="bg-water-nav text-water-nav border-b border-water-theme flex w-full  p-0 h-14 items-center px-1.5">
        <div className="mx-2 w-full">
          List
        </div>
      </div>
      {/* topbar h-14=3.5rem, breadscrumb h-14=3.5rem, footer h-7=1.75rem*/}
      <div className={`bg-water-base text-slate-600 dark:text-light h-[calc(100vh-8.75rem)] w-full`}>
        {/* BEGIN: Users Layout */}
        <div className="h-full overflow-auto">
          <div className="grid grid-cols-12 gap-3 p-3">
            {/* TABLE REGULER */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative rounded-md bg-light dark:bg-dark">
                <div className="p-3 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-200/60">
                      <tr>
                        <th className="whitespace-nowrap p-3">#</th>
                        <th className="whitespace-nowrap p-3">First Name</th>
                        <th className="whitespace-nowrap p-3">Last Name</th>
                        <th className="whitespace-nowrap p-3">Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b p-3">1</td>
                        <td className="border-b p-3">Angelina</td>
                        <td className="border-b p-3">Jolie</td>
                        <td className="border-b p-3">@angelinajolie</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">2</td>
                        <td className="border-b p-3">Brad</td>
                        <td className="border-b p-3">Pitt</td>
                        <td className="border-b p-3">@bradpitt</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">3</td>
                        <td className="border-b p-3">Charlie</td>
                        <td className="border-b p-3">Hunnam</td>
                        <td className="border-b p-3">@charliehunnam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end of TABLE REGULER */}
            {/* TABLE REGULER */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative rounded-md bg-light dark:bg-dark">
                <div className="p-3 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-200/60">
                      <tr>
                        <th className="whitespace-nowrap p-3">#</th>
                        <th className="whitespace-nowrap p-3">First Name</th>
                        <th className="whitespace-nowrap p-3">Last Name</th>
                        <th className="whitespace-nowrap p-3">Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b p-3">1</td>
                        <td className="border-b p-3">Angelina</td>
                        <td className="border-b p-3">Jolie</td>
                        <td className="border-b p-3">@angelinajolie</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">2</td>
                        <td className="border-b p-3">Brad</td>
                        <td className="border-b p-3">Pitt</td>
                        <td className="border-b p-3">@bradpitt</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">3</td>
                        <td className="border-b p-3">Charlie</td>
                        <td className="border-b p-3">Hunnam</td>
                        <td className="border-b p-3">@charliehunnam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end of TABLE REGULER */}
            {/* TABLE REGULER */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative rounded-md bg-light dark:bg-dark">
                <div className="p-3 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-200/60">
                      <tr>
                        <th className="whitespace-nowrap p-3">#</th>
                        <th className="whitespace-nowrap p-3">First Name</th>
                        <th className="whitespace-nowrap p-3">Last Name</th>
                        <th className="whitespace-nowrap p-3">Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b p-3">1</td>
                        <td className="border-b p-3">Angelina</td>
                        <td className="border-b p-3">Jolie</td>
                        <td className="border-b p-3">@angelinajolie</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">2</td>
                        <td className="border-b p-3">Brad</td>
                        <td className="border-b p-3">Pitt</td>
                        <td className="border-b p-3">@bradpitt</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">3</td>
                        <td className="border-b p-3">Charlie</td>
                        <td className="border-b p-3">Hunnam</td>
                        <td className="border-b p-3">@charliehunnam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end of TABLE REGULER */}
            {/* TABLE REGULER */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative rounded-md bg-light dark:bg-dark">
                <div className="p-3 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-200/60">
                      <tr>
                        <th className="whitespace-nowrap p-3">#</th>
                        <th className="whitespace-nowrap p-3">First Name</th>
                        <th className="whitespace-nowrap p-3">Last Name</th>
                        <th className="whitespace-nowrap p-3">Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b p-3">1</td>
                        <td className="border-b p-3">Angelina</td>
                        <td className="border-b p-3">Jolie</td>
                        <td className="border-b p-3">@angelinajolie</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">2</td>
                        <td className="border-b p-3">Brad</td>
                        <td className="border-b p-3">Pitt</td>
                        <td className="border-b p-3">@bradpitt</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">3</td>
                        <td className="border-b p-3">Charlie</td>
                        <td className="border-b p-3">Hunnam</td>
                        <td className="border-b p-3">@charliehunnam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end of TABLE REGULER */}
            {/* TABLE REGULER */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative rounded-md bg-light dark:bg-dark">
                <div className="p-3 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-200/60">
                      <tr>
                        <th className="whitespace-nowrap p-3">#</th>
                        <th className="whitespace-nowrap p-3">First Name</th>
                        <th className="whitespace-nowrap p-3">Last Name</th>
                        <th className="whitespace-nowrap p-3">Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b p-3">1</td>
                        <td className="border-b p-3">Angelina</td>
                        <td className="border-b p-3">Jolie</td>
                        <td className="border-b p-3">@angelinajolie</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">2</td>
                        <td className="border-b p-3">Brad</td>
                        <td className="border-b p-3">Pitt</td>
                        <td className="border-b p-3">@bradpitt</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">3</td>
                        <td className="border-b p-3">Charlie</td>
                        <td className="border-b p-3">Hunnam</td>
                        <td className="border-b p-3">@charliehunnam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end of TABLE REGULER */}
            {/* TABLE REGULER */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative rounded-md bg-light dark:bg-dark">
                <div className="p-3 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-200/60">
                      <tr>
                        <th className="whitespace-nowrap p-3">#</th>
                        <th className="whitespace-nowrap p-3">First Name</th>
                        <th className="whitespace-nowrap p-3">Last Name</th>
                        <th className="whitespace-nowrap p-3">Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b p-3">1</td>
                        <td className="border-b p-3">Angelina</td>
                        <td className="border-b p-3">Jolie</td>
                        <td className="border-b p-3">@angelinajolie</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">2</td>
                        <td className="border-b p-3">Brad</td>
                        <td className="border-b p-3">Pitt</td>
                        <td className="border-b p-3">@bradpitt</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">3</td>
                        <td className="border-b p-3">Charlie</td>
                        <td className="border-b p-3">Hunnam</td>
                        <td className="border-b p-3">@charliehunnam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end of TABLE REGULER */}
            {/* TABLE REGULER */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative rounded-md bg-light dark:bg-dark">
                <div className="p-3 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-200/60">
                      <tr>
                        <th className="whitespace-nowrap p-3">#</th>
                        <th className="whitespace-nowrap p-3">First Name</th>
                        <th className="whitespace-nowrap p-3">Last Name</th>
                        <th className="whitespace-nowrap p-3">Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b p-3">1</td>
                        <td className="border-b p-3">Angelina</td>
                        <td className="border-b p-3">Jolie</td>
                        <td className="border-b p-3">@angelinajolie</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">2</td>
                        <td className="border-b p-3">Brad</td>
                        <td className="border-b p-3">Pitt</td>
                        <td className="border-b p-3">@bradpitt</td>
                      </tr>
                      <tr>
                        <td className="border-b p-3">3</td>
                        <td className="border-b p-3">Charlie</td>
                        <td className="border-b p-3">Hunnam</td>
                        <td className="border-b p-3">@charliehunnam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end of TABLE REGULER */}
          </div>
        </div>
        {/* END: Users Layout */}
      </div>
    </>
  );
}

export default List;
