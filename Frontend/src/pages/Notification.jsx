import { notifications } from "../constants/notifications";

function Notification() {
  return (
    <section id="Notification" className="bg-[#00000080] h-[600px] w-[65%] overflow-y-scroll">
      <div className="text-center mb-3">
        <h1 className="font-semibold text-4xl">Notifications</h1>
      </div>

      <div className="flex flex-col">
        {notifications.map((notification) => (
          <div className="flex flex-row" key={notification.id}>
            <img src={notification.profileImg} alt="ProfileImg" className="rounded-full" height={24} width={24} />
            <div className="m-1.5">
              <h3 className="text-2xl">{notification.name}</h3>
              <p>{notification.message}</p>
            </div>
            <div className="justify-end mt-2">
              <p className="justify-end text-white">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
export default Notification;