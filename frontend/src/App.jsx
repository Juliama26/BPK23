import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Pages/Dashboard";
import PageUserList from "./Pages/PageUserList";
import PageUserAdd from "./Pages/PageUserAdd";
import PageUserEdit from "./Pages/PageUserEdit";
//Data CB
import PageBenda from "./Pages/DataCB/PageBenda";
import PageBendaAdd from "./Pages/DataCB/PageBendaAdd";
import PageBendaEdit from "./Pages/DataCB/PageBendaEdit";
import PageBangunan from "./Pages/DataCB/PageBangunan";
import PageBangunanAdd from "./Pages/DataCB/PageBangunanAdd";
import PageBangunanEdit from "./Pages/DataCB/PageBangunanEdit";
import PageStruktur from "./Pages/DataCB/PageStruktur";
import PageStrukturAdd from "./Pages/DataCB/PageStrukturAdd";
import PageStrukturEdit from "./Pages/DataCB/PageStrukturEdit";
import PageSitus from "./Pages/DataCB/PageSitus";
import PageSitusAdd from "./Pages/DataCB/PageSitusAdd";
import PageSitusEdit from "./Pages/DataCB/PageSitusEdit";
import PageKawasan from "./Pages/DataCB/PageKawasan";
import PageKawasanAdd from "./Pages/DataCB/PageKawasanAdd";
import PageKawasanEdit from "./Pages/DataCB/PageKawasanEdit";
//Data OPK
import PageTradisi from "./Pages/DataOPK/PageTradisi";
import PageTradisiAdd from "./Pages/DataOPK/PageTradisiAdd";
import PageTradisiEdit from "./Pages/DataOPK/PageTradisiEdit";
import PageManuskrip from "./Pages/DataOPK/PageManuskrip";
import PageManuskripAdd from "./Pages/DataOPK/PageManuskripAdd";
import PageManuskripEdit from "./Pages/DataOPK/PageManuskripEdit";
import PageAdat from "./Pages/DataOPK/PageAdat";
import PageAdatAdd from "./Pages/DataOPK/PageAdatAdd";
import PageAdaEdit from "./Pages/DataOPK/PageAdatEdit";
import PageRitus from "./Pages/DataOPK/PageRitus";
import PageRitusAdd from "./Pages/DataOPK/PageRitusAdd";
import PageRitusEdit from "./Pages/DataOPK/PageRitusEdit";
import PagePengetahuan from "./Pages/DataOPK/PagePengetahuan";
import PagePengetahuanAdd from "./Pages/DataOPK/PagePengetahuanAdd";
import PagePengetahuanEdit from "./Pages/DataOPK/PagePengetahuanEdit";
import PageTeknologi from "./Pages/DataOPK/PageTeknologi";
import PageTeknologiAdd from "./Pages/DataOPK/PageTeknologiAdd";
import PageTeknologiEdit from "./Pages/DataOPK/PageTeknologiEdit";
import PageSeni from "./Pages/DataOPK/PageSeni";
import PageSeniAdd from "./Pages/DataOPK/PageSeniAdd";
import PageSeniEdit from "./Pages/DataOPK/PageSeniEdit";
import PageBahasa from "./Pages/DataOPK/PageBahasa";
import PageBahasaAdd from "./Pages/DataOPK/PageBahasaAdd";
import PageBahasaEdit from "./Pages/DataOPK/PageBahasaEdit";
import PagePermainan from "./Pages/DataOPK/PagePermainan";
import PagePermainanAdd from "./Pages/DataOPK/PagePermainanAdd";
import PagePermainanEdit from "./Pages/DataOPK/PagePermainanEdit";
import PageOlahraga from "./Pages/DataOPK/PageOlahraga";
import PageOlahragaAdd from "./Pages/DataOPK/PageOlahragaAdd";
import PageOlahragaEdit from "./Pages/DataOPK/PageOlahragaEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<PageUserList />} />
        <Route path="/users/add" element={<PageUserAdd />} />
        <Route path="/users/edit/:id" element={<PageUserEdit />} />
        //Data CB
        <Route path="/benda" element={<PageBenda />} />
        <Route path="/benda/add" element={<PageBendaAdd />} />
        <Route path="/benda/edit/:id" element={<PageBendaEdit />} />
        <Route path="/bangunan" element={<PageBangunan />} />
        <Route path="/bangunan/add" element={<PageBangunanAdd />} />
        <Route path="/bangunan/edit/:id" element={<PageBangunanEdit />} />
        <Route path="/struktur" element={<PageStruktur />} />
        <Route path="/struktur/add" element={<PageStrukturAdd />} />
        <Route path="/struktur/edit/:id" element={<PageStrukturEdit />} />
        <Route path="/situs" element={<PageSitus />} />
        <Route path="/situs/add" element={<PageSitusAdd />} />
        <Route path="/situs/edit/:id" element={<PageSitusEdit />} />
        <Route path="/kawasan" element={<PageKawasan />} />
        <Route path="/kawasan/add" element={<PageKawasanAdd />} />
        <Route path="/kawasan/edit/:id" element={<PageKawasanEdit />} />
        //Data OPK
        <Route path="/tradisi" element={<PageTradisi />} />
        <Route path="/tradisi/add" element={<PageTradisiAdd />} />
        <Route path="/tradisi/edit/:id" element={<PageTradisiEdit />} />
        <Route path="/manuskrip" element={<PageManuskrip />} />
        <Route path="/manuskrip/add" element={<PageManuskripAdd />} />
        <Route path="/manuskrip/edit/:id" element={<PageManuskripEdit />} />
        <Route path="/adat" element={<PageAdat />} />
        <Route path="/adat/add" element={<PageAdatAdd />} />
        <Route path="/adat/edit/:id" element={<PageAdaEdit />} />
        <Route path="/ritus" element={<PageRitus />} />
        <Route path="/ritus/add" element={<PageRitusAdd />} />
        <Route path="/ritus/edit/:id" element={<PageRitusEdit />} />
        <Route path="/pengetahuan" element={<PagePengetahuan />} />
        <Route path="/pengetahuan/add" element={<PagePengetahuanAdd />} />
        <Route path="/pengetahuan/edit/:id" element={<PagePengetahuanEdit />} />
        <Route path="/teknologi" element={<PageTeknologi />} />
        <Route path="/teknologi/add" element={<PageTeknologiAdd />} />
        <Route path="/teknologi/edit/:id" element={<PageTeknologiEdit />} />
        <Route path="/seni" element={<PageSeni />} />
        <Route path="/seni/add" element={<PageSeniAdd />} />
        <Route path="/seni/edit/:id" element={<PageSeniEdit />} />
        <Route path="/bahasa" element={<PageBahasa />} />
        <Route path="/bahasa/add" element={<PageBahasaAdd />} />
        <Route path="/bahasa/edit/:id" element={<PageBahasaEdit />} />
        <Route path="/permainan" element={<PagePermainan />} />
        <Route path="/permainan/add" element={<PagePermainanAdd />} />
        <Route path="/permainan/edit/:id" element={<PagePermainanEdit />} />
        <Route path="/olahraga" element={<PageOlahraga />} />
        <Route path="/olahraga/add" element={<PageOlahragaAdd />} />
        <Route path="/olahraga/edit/:id" element={<PageOlahragaEdit />} />
      </Routes>
    </>
  );
}

export default App;
