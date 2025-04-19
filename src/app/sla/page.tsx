import React from 'react';

const SLAPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Service Level Agreement (SLA)</h1>

      <p className="mb-4">Sear Hosting shall use all reasonable commercial efforts, being no less than accepted industrial standards in this regard to ensure that your Sear Hosting service is available to you (the Client) 99% of the time in any given calendar month.</p>

      <p className="mb-4">If not, you may be eligible for Client Service Credits described below.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Definitions</h2>
      <p className="mb-4">The following definitions shall apply to the Sear Hosting SLA.</p>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>&quot;Client&quot; shall be defined as an Sear Hosting customer.</li>
        <li>&quot;Client Service&quot; shall be defined as an individual hosting product purchased by an Sear Hosting client.</li>
        <li>&quot;Server&quot; shall be defined as a computer system on which a Client Service resides.</li>
        <li>&quot;Monthly Uptime Percentage&quot; means the total number of minutes in the calendar month minus the number of minutes of Downtime suffered from all Downtime Periods in the calendar month, divided by the total number of minutes in the calendar month.</li>
        <li>&quot;Downtime&quot; means, for a Server, that the IP address the Client Service is attached to does not respond to ping tests or TCP port tests from other systems in the Sear Hosting network. This indicates the Client Service is unreachable.</li>
        <li>&quot;Emergency Downtime&quot; means situations where Sear Hosting must temporarily induce downtime on a Server for events such as hardware failure, vulnerability repairs, and other such situations requiring the immediate shutdown of the system. Emergency Downtime is not considered Downtime for purposes relating to the Sear Hosting SLA.</li>
        <li>&quot;Scheduled Downtime&quot; refers to situations where Sear Hosting will inform you of periods of downtime prior to the application of the Downtime. Scheduled Downtime is not considered Downtime for purposes relating to the Sear Hosting SLA. You will be informed through the web-based panel associated with your Client Service.</li>
        <li>
          &quot;Client Service Credits&quot; will be provided according to the following schedule:
          <ul className="list-circle list-inside ml-4 mt-2 space-y-1">
            <li>Client credit: Includes one month of service credit added to the account credit balance, if your Monthly Uptime Percentage for any given calendar month is below 95%.</li>
            <li>Customer Must Request Credit. In order to receive any Client Service Credits described above, you must notify Sear Hosting by email or otherwise in writing within thirty (30) days from the time you become eligible to receive a Client Service Credit.</li>
            <li>Maximum Client Service Credit. The aggregated maximum number of Client Service Credits you can claim for any Downtime periods that occur in a single calendar month shall not exceed 1 month of service credit added to your credit balance.</li>
            <li>
              Uptime SLA Exclusions: This Uptime SLA does not apply to any performance issues caused by:
              <ul className="list-square list-inside ml-4 mt-2 space-y-1">
                <li>Factors outside of Sear Hosting&apos;s reasonable control</li>
                <li>Factors that result from actions or inactions of you and any third parties</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SLAPage; 