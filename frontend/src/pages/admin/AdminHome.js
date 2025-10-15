import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container p-3">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3 className="mt-4">Manage Blood Bank App </h3>
          <hr />
          <p>
              <strong>Thank you for being part of the life-saving mission!</strong><br /><br />
              This dashboard helps you efficiently manage every aspect of blood donation and distribution — 
              ensuring every drop counts.
            </p>

            <p><strong>With your admin access, you can:</strong></p>
            <ul>
              <li>🩸 Track and manage blood inventory in real time</li>
              <li>👥 Register new donors and update donor profiles</li>
              <li>🏥 Handle requests from hospitals and patients instantly</li>
              <li>📈 Review donation statistics and generate detailed reports</li>
              <li>⚠️ Get instant alerts for low stock or urgent needs</li>
            </ul>

            <p>
              Together, we make sure that every unit of blood reaches those who need it most — 
              <em>safely, quickly, and efficiently.</em>
            </p>

        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
