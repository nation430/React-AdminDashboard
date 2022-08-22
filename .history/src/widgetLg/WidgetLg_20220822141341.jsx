import "./widgetLg.css"

export default function widgetLg(){
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
    return(
        <div className="widgetLg p-5 mr-5">
            <h3 className="widgetLgTitle font-semibold">Latest transaction</h3>
            <div className="container">
            <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
			<thead class="text-white">
				<tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">Customer</th>
					<th class="p-3 text-left">Date</th>
					<th class="p-3 text-left" width="110px">Amount</th>
                    <th class="p-3 text-left" width="110px">Status</th>
				</tr>
				<tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">Customer</th>
					<th class="p-3 text-left">Date</th>
					<th class="p-3 text-left" width="110px">Amount</th>
                    <th class="p-3 text-left" width="110px">Status</th>
				</tr>
                <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">Customer</th>
					<th class="p-3 text-left">Date</th>
					<th class="p-3 text-left" width="110px">Amount</th>
                    <th class="p-3 text-left" width="110px">Status</th>
				</tr>
                <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">Customer</th>
					<th class="p-3 text-left">Date</th>
					<th class="p-3 text-left" width="110px">Amount</th>
                    <th class="p-3 text-left" width="110px">Status</th>
				</tr>
            	<tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
					<th class="p-3 text-left">Customer</th>
					<th class="p-3 text-left">Date</th>
					<th class="p-3 text-left" width="110px">Amount</th>
                    <th class="p-3 text-left" width="110px">Status</th>
				</tr>
			</thead>
			<tbody class="flex-1 sm:flex-none">
				<tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
					<td class="widgetLgUser flex items-center p-3">
                        <img src="images/member1.jpg" alt="image" className="wiggetLgImg w-6 h-6 rounded-full object-cover" />
                        <span className="widgetLgName pl-2">Susan Carol</span>
                    </td>
					<td class="widgetLgDate p-3">22 Aug 2022</td>
					<td class="widgetLgAmount p-3">$122.00</td>
                    <td className="widgetLgStatus p-3">
                    <Button type="Approved" />
          </td>
				</tr>
			</tbody>
		</table>
            </div>

        </div>
    )
}