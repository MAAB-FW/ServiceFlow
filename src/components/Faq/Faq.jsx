import React from "react"

const Faq = () => {
    return (
        <section className="bg-gray-100 text-gray-800 rounded-lg my-14">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 text-gray-600">
                    Have questions about our Electronic Item Repairing Services? Find answers to commonly asked questions here.
                </p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg cursor-pointer" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-600">
                            How long does a typical repair take?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            Repair times can vary depending on the complexity of the issue and the availability of parts. However,
                            most common repairs can be completed within 1-2 business days. For more extensive repairs, we will
                            provide you with an estimated turnaround time upfront.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg cursor-pointer" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-600">
                            Do you offer warranty on repairs?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            Yes, we stand behind our repairs with a warranty to ensure your satisfaction and peace of mind. Our
                            standard warranty covers parts and labor for a specified period after the repair is completed. Please
                            check our warranty policy for more details.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg cursor-pointer" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-600">
                            How do I request a repair service?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            Getting started is easy! Simply fill out our online repair request form with details about your device
                            and the issue you are experiencing. Once we receive your request, we will contact you to schedule an
                            appointment or provide further instructions.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg cursor-pointer" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-600">
                            What if I am not sure what is wrong with my device?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            No problem! Our experienced technicians are here to help diagnose the issue with your device. You can
                            bring it to our repair center for a free diagnostic evaluation, and we will provide you with a quote
                            for the necessary repairs.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg cursor-pointer" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-600">
                            Are your repair services affordable?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            We strive to offer competitive pricing for our repair services while maintaining high-quality
                            standards. Our transparent pricing ensures you know exactly what to expect, with no hidden fees. We
                            also offer discounts for certain repairs and promotions from time to time.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg cursor-pointer" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-600">
                            Is it safe to trust my device with you for repairs?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            Absolutely. We understand the importance of your electronic devices and take every precaution to
                            ensure their safety and security while in our care. Our technicians are trained professionals with
                            years of experience in electronic repair, and we use state-of-the-art equipment and genuine parts for
                            all repairs.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg cursor-pointer" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-teal-600">
                            Can you repair water-damaged electronics?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            Yes, we have expertise in repairing water-damaged electronics. Time is of the essence with water
                            damage, so we recommend bringing your device to us as soon as possible for the best chance of
                            successful repair. Our technicians will assess the extent of the damage and recommend the necessary
                            repairs.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    )
}

export default Faq
