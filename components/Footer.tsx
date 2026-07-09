import { footerList } from '@/data/data'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        {/* Footer top */}
        <div className="">
          {footerList.map((item) => (
            <div className="" key={item.id}>
              <p className="">{item.title}</p>
              <ul className="">
                {item.list.map((label, index) => (
                  <li className="" key={index}>
                    <a href="#" className="">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Footer bottom */}
        <div className=""></div>
      </div>
    </footer>
  )
}
