function App() {
  return (
    <>
      {/* Main Container */}
      <div className="flex flex-col justify-center items-center h-screen">

        {/* Top Bar */}
        <div className="font-bold text-xl mb-2">Assignment</div>

        <div className="w-11/12 h-5/6 flex justify-center items-center">
          <div className="w-11/12 h-11/12">

            {/* Tabs */}
            <div className="flex justify-start space-x-5 items-center font-semibold">
              <p className="border-b-2 border-blue-800">Thoughts(25)</p>
              <p>Top Holders</p>
              <p>Activity</p>
            </div>

            {/* Add Comment Box */}
            <div className="border flex justify-between p-3 border-gray-300 rounded-lg mt-5 w-1/2">
              <div>Add a comment</div>
              <div>Post</div>
            </div>

            {/* Comments Section */}
            <div className="w-1/2 h-5/6 mt-5">

              {/* First Comment */}
              <div className="h-1/2 mt-10">
                <div>
                  <div className="flex justify-start space-x-5 p-3">
                    {/* Avatar */}
                    <div className="bg-gray-300 rounded-full w-10 h-10"></div>
                    {/* Comment Content */}
                    <div>
                      <div className="font-semibold">
                        Rodrickjesferhadley <span className="text-sm text-gray-400">2 hr ago</span>
                      </div>
                      <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magnam?</div>
                      <div>👍38 <span className="text-blue-700 font-bold ml-2 text-sm">Reply</span></div>

                      {/* Replies to First Comment */}
                      <div className="flex justify-start space-x-5 p-3">
                        <div className="bg-gray-300 rounded-full w-10 h-10"></div>
                        <div>
                          <div className="font-semibold">
                            Rodrickjesferhadley <span className="text-sm text-gray-400">2 hr ago</span>
                          </div>
                          <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magnam?</div>
                          <div>👍38 <span className="text-blue-700 font-bold ml-2 text-sm">Reply</span></div>
                        </div>
                      </div>

                      {/* Second Reply */}
                      <div className="flex justify-start space-x-5 p-3">
                        <div className="bg-gray-300 rounded-full w-10 h-10"></div>
                        <div>
                          <div className="font-semibold">
                            Rodrickjesferhadley <span className="text-sm text-gray-400">2 hr ago</span>
                          </div>
                          <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magnam?</div>
                          <div>👍38 <span className="text-blue-700 font-bold ml-2 text-sm">Reply</span></div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Second Comment (Similar Structure) */}
              <div>
                <div className="flex justify-start space-x-5 p-3">
                  <div className="bg-gray-300 rounded-full w-10 h-10"></div>
                  <div>
                    <div className="font-semibold">
                      Rodrickjesferhadley <span className="text-sm text-gray-400">2 hr ago</span>
                    </div>
                    <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magnam?</div>
                    <div>👍38 <span className="text-blue-700 font-bold ml-2 text-sm">Reply</span></div>

                    {/* Replies to Second Comment */}
                    <div className="flex justify-start space-x-5 p-3">
                      <div className="bg-gray-300 rounded-full w-10 h-10"></div>
                      <div>
                        <div className="font-semibold">
                          Rodrickjesferhadley <span className="text-sm text-gray-400">2 hr ago</span>
                        </div>
                        <div className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magnam?</div>
                        <div>👍38 <span className="text-blue-700 font-bold ml-2 text-sm">Reply</span></div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App;
