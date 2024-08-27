import React from "react";
import { motion } from "framer-motion";

function StatCard({ name, icon: Icon, value, color }) {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-700"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-3xl font-large text-white">
          <Icon size={30} className="mr-4" style={{ color }} />
          {name}
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          accusamus deserunt ut similique aperiam necessitatibus quae error,
          quibusdam alias. Atque, debitis laboriosam, fugiat voluptatum vitae
          aut accusantium reprehenderit commodi magni, sit saepe perferendis
          quae odio doloremque illo asperiores et cum sed sequi. Tempora,
          reprehenderit quae itaque repellat accusamus quisquam obcaecati
          impedit dolorum animi ut voluptas temporibus error alias at unde sequi
          laborum sapiente consequuntur id ipsum ad dolore numquam magni ipsam?
          Aperiam impedit suscipit expedita commodi dignissimos adipisci
          veritatis ea cumque quisquam aliquam eos quam tempore veniam velit sed
          nisi dicta error, voluptates ab! Minima quo fugit, quos veritatis
          obcaecati doloremque, quas repellendus totam, atque necessitatibus
          officia soluta debitis beatae eligendi! Illo neque quasi nulla qui
          dolorem, aspernatur fugit eum officiis doloribus aliquam quos odio
          molestiae totam quis incidunt recusandae provident iusto! At eveniet
          commodi alias quam obcaecati, quos, quae beatae ea eaque odio odit
          praesentium nisi pariatur in repudiandae aspernatur officia ipsam quas
          vel non corrupti numquam. Explicabo reiciendis voluptatum corrupti
          incidunt placeat commodi maiores? Laborum, sunt quidem. Cupiditate
          assumenda voluptas vero consequuntur ipsam libero reprehenderit quo,
          id modi soluta, ex non consequatur fugiat asperiores rem magnam vel
          architecto, voluptatem sit ratione delectus aliquam! Dicta ut
          consequatur voluptates ab cumque numquam deleniti. Sit placeat alias
          assumenda ad laborum est saepe dolorum, quia id magnam impedit
          suscipit repudiandae voluptas rem doloribus voluptates animi modi
          facere ducimus cum. Saepe voluptates magni earum. Natus, maxime
          praesentium neque quidem minima fugit iure alias commodi at sit fuga
          repudiandae assumenda excepturi eum voluptate ab sint quam ullam quas.
          Quo voluptatem eaque odit, neque reiciendis delectus deserunt aut
          nihil aperiam, voluptate unde sequi, velit repudiandae dolor expedita
          harum. Consequatur eos corrupti nulla, ut excepturi, saepe ad dolores
          eius quia atque modi, molestias exercitationem? Adipisci iure quaerat
          a corrupti, perspiciatis, illum maxime qui ipsum eum rem consequuntur
          sunt earum beatae ratione tempora reiciendis laborum explicabo
          officiis, quis voluptatibus quasi minima nulla. Voluptatum
          perspiciatis consequuntur quidem ullam id in, dolorum consectetur
          dolorem quos assumenda porro nulla fuga expedita enim harum est
          quisquam ducimus cupiditate dolore accusamus! Temporibus non maiores
          alias dolore obcaecati at, eius excepturi ea deleniti perferendis
          expedita iure asperiores quisquam perspiciatis itaque nobis, cum
          aliquid totam, mollitia vel sed optio incidunt sint. Eveniet, adipisci
          magnam neque ipsa id exercitationem nostrum doloremque libero repellat
          quos necessitatibus iusto vel debitis a iste magni voluptatem? Vel
          provident eaque tempore, ex deserunt amet illo? Tenetur obcaecati
          repudiandae fugit maxime modi ipsam eum dolor cumque vel sunt
          necessitatibus molestias sit cum quae provident beatae dicta animi hic
          quidem impedit doloribus, error laborum. Error quis id quos suscipit
          enim quasi accusamus ea praesentium voluptatem facere ut, impedit
          exercitationem consectetur est consequatur aut facilis velit alias
          voluptate dolorum ducimus, nemo veritatis similique rem. Fugit est
          cupiditate hic repellendus. Et neque in, illum minus deserunt
          accusamus perferendis nostrum vel maiores officia ab recusandae ipsam
          reprehenderit odit voluptates, saepe magni iure alias aliquid amet nam
          molestias! Accusamus eaque cum nulla ipsam impedit adipisci deleniti?
          Ex impedit necessitatibus possimus non amet quasi expedita nam
          numquam.
        </p>
      </div>
    </motion.div>
  );
}

export default StatCard;
