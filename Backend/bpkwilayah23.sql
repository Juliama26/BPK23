--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: enum_Users_user_role; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Users_user_role" AS ENUM (
    'Admin',
    'CB',
    'OPK'
);


ALTER TYPE public."enum_Users_user_role" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: DataCBs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."DataCBs" (
    id integer NOT NULL,
    uuid character varying(255),
    nama character varying(255),
    "namaLain" character varying(255),
    koordx character varying(255),
    koordy character varying(255),
    provinsi character varying(255),
    kabupaten character varying(255),
    kecamatan character varying(255),
    kelurahan character varying(255),
    dusun character varying(255),
    deskripsi text,
    narasumber character varying(255),
    "imageUrl" character varying(255)[],
    "documenUrl" character varying(255),
    "userId" integer,
    "categoryId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."DataCBs" OWNER TO postgres;

--
-- Name: DataCBs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."DataCBs_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."DataCBs_id_seq" OWNER TO postgres;

--
-- Name: DataCBs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."DataCBs_id_seq" OWNED BY public."DataCBs".id;


--
-- Name: DataOPKs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."DataOPKs" (
    id integer NOT NULL,
    uuid character varying(255),
    nama character varying(255),
    etnis character varying(255),
    jenis character varying(255),
    aksara character varying(255),
    dialek character varying(255),
    fungsi character varying(255),
    kegunaan character varying(255),
    bahan character varying(255),
    bahasa character varying(255),
    pencipta character varying(255),
    perlengkapan character varying(255),
    nilai_moral character varying(255),
    aturan character varying(255),
    jml_pemain integer,
    provinsi character varying(255),
    kabupaten character varying(255),
    kecamatan character varying(255),
    kelurahan character varying(255),
    dusun character varying(255),
    deskripsi text,
    narasumber character varying(255),
    "imageUrl" character varying(255)[],
    "documenUrl" character varying(255),
    "userId" integer,
    "categoryId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."DataOPKs" OWNER TO postgres;

--
-- Name: DataOPKs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."DataOPKs_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."DataOPKs_id_seq" OWNER TO postgres;

--
-- Name: DataOPKs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."DataOPKs_id_seq" OWNED BY public."DataOPKs".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    "fullName" character varying(255),
    email character varying(255),
    password character varying(255),
    user_role public."enum_Users_user_role",
    "imageUrl" character varying(255)[],
    refresh_token text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: cbCategories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."cbCategories" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."cbCategories" OWNER TO postgres;

--
-- Name: cbCategories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."cbCategories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."cbCategories_id_seq" OWNER TO postgres;

--
-- Name: cbCategories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."cbCategories_id_seq" OWNED BY public."cbCategories".id;


--
-- Name: opkCategories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."opkCategories" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."opkCategories" OWNER TO postgres;

--
-- Name: opkCategories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."opkCategories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."opkCategories_id_seq" OWNER TO postgres;

--
-- Name: opkCategories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."opkCategories_id_seq" OWNED BY public."opkCategories".id;


--
-- Name: DataCBs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DataCBs" ALTER COLUMN id SET DEFAULT nextval('public."DataCBs_id_seq"'::regclass);


--
-- Name: DataOPKs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DataOPKs" ALTER COLUMN id SET DEFAULT nextval('public."DataOPKs_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: cbCategories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."cbCategories" ALTER COLUMN id SET DEFAULT nextval('public."cbCategories_id_seq"'::regclass);


--
-- Name: opkCategories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."opkCategories" ALTER COLUMN id SET DEFAULT nextval('public."opkCategories_id_seq"'::regclass);


--
-- Data for Name: DataCBs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."DataCBs" (id, uuid, nama, "namaLain", koordx, koordy, provinsi, kabupaten, kecamatan, kelurahan, dusun, deskripsi, narasumber, "imageUrl", "documenUrl", "userId", "categoryId", "createdAt", "updatedAt") FROM stdin;
3	606bec36-7fb6-47df-a58f-389f2bced6ce	Pillbox Steleng Laut	-	0°53'57,49''LS	134°6'21,51''BT	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam		Pak Tobias	{https://res.cloudinary.com/djyztox08/image/upload/v1723621672/siskax1xyy7yn7rdzjxa.jpg}	-	1	3	2024-08-14 14:47:55.677+07	2024-08-14 14:47:55.677+07
6	0aba8202-3115-4df3-8308-87cec83a5eec	Steleng Jepang Kamara 	-	0°53'42,71''LS	134°5'21,73''BT	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam		Pak Tobias	{https://res.cloudinary.com/djyztox08/image/upload/v1723622060/mywkfjpxwtfaxer5uhjg.jpg}	-	1	3	2024-08-14 14:54:23.513+07	2024-08-14 14:54:23.513+07
7	c451aa3d-de5a-4f0e-894c-78d3c8b4703a	Bastion Kamara 2	-	0°53'43,69''LS	134°5'21,48''BT	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam		Pak Tobias	{https://res.cloudinary.com/djyztox08/image/upload/v1723622920/xlimamotdjmrc1bdf4rx.jpg}	-	2	3	2024-08-14 15:08:43.483+07	2024-08-14 15:08:43.483+07
8	6bb0d10f-86df-4664-9a34-c923f7592401	Bak Penampung Air Korepyar	-	0°53'49,36''LS	134°5'23,96''BT	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam		-	{https://res.cloudinary.com/djyztox08/image/upload/v1723623051/zhrxtsmx8ihao8zthpdx.jpg}	-	2	3	2024-08-14 15:10:54.539+07	2024-08-14 15:10:54.539+07
9	e83372a3-31c9-4d88-8c06-a6cf09be2d90	Tempat menyuci Pakaian Korepyar	-	0°53'52,63''LS	134°5'27,49''BT	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam		Pak Tobias	{https://res.cloudinary.com/djyztox08/image/upload/v1723623124/zjicbvom13pt3hsbsgki.jpg}	-	2	3	2024-08-14 15:12:07.47+07	2024-08-14 15:12:21.093+07
11	3c147d7d-4c5d-425e-bdae-cfc35a33696d	Steleng Tornabo	-	0°54'02,51''LS	134°5'39,24''BT	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam		Pak Tobias	{https://res.cloudinary.com/djyztox08/image/upload/v1723623328/fytiqzdbkjreycbgozom.jpg}	-	2	3	2024-08-14 15:15:31.874+07	2024-08-14 15:15:31.874+07
1	93de724d-eca1-41a1-a685-716eee9fa9f2	Goa Sarwapen	-	0°54'16,44''LS	6'22,01''BT	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam	-	Pak Tobias	{https://res.cloudinary.com/djyztox08/image/upload/v1723621429/aj0mjizfxmnqmzjuv4gn.jpg}	-	1	3	2024-08-14 14:43:52.568+07	2024-08-14 15:27:24.82+07
17	a3f85cd8-4bc0-4932-be84-1e037bfcadd4	Piring Keramik Raja I Wertuar 	Piring Keramik Raja I Wertuar	132°25′39.90′′ E	02°43′23.88′′ S	Papua Barat	Fak-Fak	Kokas 	Patimburak 	Patimburak 		-	{https://res.cloudinary.com/djyztox08/image/upload/v1723626320/gzmojj4hy3fntbwn8ucl.jpg}	-	2	1	2024-08-14 16:05:23.008+07	2024-08-14 16:05:23.008+07
13	3afb1f84-8188-492f-a9a0-0105423416b4	2 Mortir 	-	Kor Pemilik = 0°54'18,53''LS	Kor Pemilik = 134°5'57,73''BT	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam	mortir 1 panjang 27.5 cm, dalam 23.5 cm, diameter 6.5 cm. mortir 2 panjang 22.5 cm, dalam 18 cm, diameter 6.3 cm.	Pak Tobias	{https://res.cloudinary.com/djyztox08/image/upload/v1723624849/nrtingqcunj1xppxigzo.png,https://res.cloudinary.com/djyztox08/image/upload/v1723624854/rr6ilooespqcgj6cild0.png,https://res.cloudinary.com/djyztox08/image/upload/v1723624850/etk9idh5z3dquvr1hlne.png,https://res.cloudinary.com/djyztox08/image/upload/v1723624849/mexoq17vmh8i9wo5bdpq.png}	-	2	1	2024-08-14 15:26:16.69+07	2024-08-14 15:40:57.689+07
14	f3ec1039-c1fa-4772-aafb-88b210d1f580	Bom Pesawat	-	0°55'18,40''LS	134°6'37,11''BT	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam		Pak Tobias	{https://res.cloudinary.com/djyztox08/image/upload/v1723625190/oqwn4msurvkqrp39bf5i.jpg}	-	2	1	2024-08-14 15:46:33.592+07	2024-08-14 15:46:33.592+07
15	009d567a-f264-4232-9a8a-b53bd8feaa43	Goa Sawidow	-	0°53'26,13''LS	134°5'31,50''BT	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam	panjang 8 m, pintu memiliki tinggi 0.9 m, lebar 2 m, dan tinggi dalam 2.19 m, lebar dalam 2.3 m	Pak Tobias	{https://res.cloudinary.com/djyztox08/image/upload/v1723625387/nzixgnc7crxo8ytoefsd.jpg}	-	2	3	2024-08-14 15:49:50.671+07	2024-08-14 15:49:50.671+07
18	e832607a-405b-4cfb-9866-6a49daded950	Tangki 	-	132°26′30.84′′ E	02°42′06.54′′ S	Papua Barat	Fak-Fak	Kokas	-	Jln. Rumah Gesan 		-	{https://res.cloudinary.com/djyztox08/image/upload/v1723626461/z0gadliptvwi0xhakvwx.jpg}	-	2	1	2024-08-14 16:07:44.229+07	2024-08-14 16:07:44.229+07
19	7039ec22-e69c-43f5-9550-ddf5b031684f	 Batu Prasom 	-	132° 25' 37.3“E	00°48'22.2“ S	Papua Barat	Tambrauw			Pef		-	{https://res.cloudinary.com/djyztox08/image/upload/v1723626620/ikknxkgcfhjdhxr0hsfu.jpg}	-	2	1	2024-08-14 16:10:22.942+07	2024-08-14 16:10:22.942+07
21	77831c14-5062-4cb0-a444-632de8f2fa4c	Pompa	-	131°29' 59.943" E	1°7' 28.502" S	Papua Barat Daya	Sorong			Klamono	Terdapat dua situs yang bernama "Pompa'	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723626992/asorharhp0zl5ydzmb50.jpg}	-	2	1	2024-08-14 16:16:35.759+07	2024-08-14 16:16:35.759+07
23	56a24509-4353-4db4-ad55-449a78a29371	Galangan kapal	-	131°15' 9.780" E	0°52' 41.075" S	Papua Barat Daya	Sorong	Sorong Kota	Kampung Baru	kompleks perikanan indonesia		-	{https://res.cloudinary.com/djyztox08/image/upload/v1723627215/gxchihzjfdqutnupeub5.jpg}	-	2	1	2024-08-14 16:20:18.258+07	2024-08-14 16:20:18.258+07
10	58744b7c-2b76-4b78-a3df-29c94b848934	Bak Air Horepyar	-	0°53'52,64''LS	134°5'27,24''BT	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam		Pak Tobias	{https://res.cloudinary.com/djyztox08/image/upload/v1723713845/spvoowyqhkp9jfzqkwqj.png}		2	3	2024-08-14 15:13:41.837+07	2024-08-15 16:24:10.54+07
16	4cc47d32-c046-47fe-90dc-87bfc29b81c3	Steleng Tornabo	-	0°54'02,51''LS	134°5'39,24''BT	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam	Utuh, Tidak Terpelihara, Belum pernah dipugar, Tidan ada penambahan.		{https://res.cloudinary.com/djyztox08/image/upload/v1723714139/xamk2tixu4eqtchutgso.png}		2	3	2024-08-14 15:52:01.156+07	2024-08-15 16:29:03.816+07
24	5a9a8784-7812-4f53-89e3-343a0c92aecd	Jangkar Besar 2	-	131°11' 36.240" E	0°34' 40.598" N	Papua Barat Daya	Raja Ampat	Kepulauan Ayau		Pulau Reni		-	{https://res.cloudinary.com/djyztox08/image/upload/v1723714437/zsmjc7hklmaxzzij4wcq.jpg}	-	2	1	2024-08-14 16:22:01.665+07	2024-08-15 16:34:02.009+07
22	c4fd5966-afe5-44e6-bc10-ef4f9e91539b	Pipa	-	131°14' 53.349" E	0°52' 29.439" S	Papua Barat Daya	Sorong	Sorong Kota	Kampung Baru			-	{https://res.cloudinary.com/djyztox08/image/upload/v1723714544/mn6k31icn4xqqfxsygph.jpg}	-	2	1	2024-08-14 16:18:16.81+07	2024-08-15 16:35:48.941+07
20	20a55fe9-9da0-4af4-b748-37b6ef565007	Tank	Lokasi Temuan Tank II	132°14’03.1” BT	0°24’48.7” LS	Papua Barat Daya	Tambrauw	Bikar	Kampung Nombrak	Kampung Nombrak	Tank sebanyak 5 buah	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723714616/v6nsznbbitutoi3djc6o.jpg}	-	2	1	2024-08-14 16:14:21.18+07	2024-08-15 16:37:01.323+07
25	0a6eebc6-6dc5-4e8a-984c-46b8cf75ee19	Tiang bendera	-	131°14' 25.097" E	0°53' 8.609" S	Papua Barat Daya	Sorong	Sorong kepulauan	Doom			-	{https://res.cloudinary.com/djyztox08/image/upload/v1723627422/nz5jkq6avktktygihire.jpg}	-	2	1	2024-08-14 16:23:45.12+07	2024-08-14 16:23:45.12+07
26	53bd32a5-a3cd-48d3-aead-2768b05dc68a	Situs Tagaf Keramat		132°39’42.3” BT	2°45’17.3” LS	Papua Barat	Fak-Fak	Arguni 	Kampung/pulau Darembang	Kampung/pulau Darembang	Gambar berupa telapak tangan berwarna merah.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723627702/hvnrszffrobnrzub6e5h.jpg}	-	2	4	2024-08-14 16:28:25.578+07	2024-08-14 16:28:25.578+07
27	90e5702b-fa42-4a71-8ed1-cb7b7c249bb6	Situs Sasiramo		132°39’32.8” BT	2°45’3.7” LS	Papua Barat	Fak-Fak	Arguni 	Kampung/pulau Darembang	Kampung/pulau Darembang	Gambar bercak-bercak merah yang pudae dan tidak teridentifikasi	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723627810/g2nqx0pry3a6d13l4yyd.jpg}	-	2	4	2024-08-14 16:30:13.376+07	2024-08-14 16:30:13.376+07
28	2080b416-8f69-4a3c-9c4a-f27b3cb9e21e	Situs Afofo Uatmata		132°40’1.2” BT	2°45’33.5” LS	Papua Barat	Fak-Fak	Arguni 	Kampung/pulau Darembang	Kampung/pulau Darembang	Gambar berwarna merah dengan bentuk telapak tangan, telapak hingga lengan, dan gambar abstrak.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723627925/qtt3xy3vj76uuuty4w6g.jpg}	-	2	4	2024-08-14 16:32:08.941+07	2024-08-14 16:32:08.941+07
29	cd1114e4-0e59-428c-b8e5-cdecf5cd81ec	Situs Sontei		132°38’17.8” BT	2°43’33.9” LS	Papua Barat	Fak-Fak	Arguni 	Kampung/pulau Furir	Kampung/pulau Furir	Gambar Cadas yang teridentifikasi berupa telapak tangan berwarna merah	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723628045/cfvdtrq7toy41t1cbngx.jpg}	-	2	4	2024-08-14 16:34:08.648+07	2024-08-14 16:34:08.648+07
30	edbc5018-c0cb-486b-8ad8-2c4fabd00e18	Situs Ota Nusa		132°39’0.4” BT	2°44’12.7” LS	Papua Barat	Fak-Fak	Arguni 	Kampung/pulau Furir	Kampung/pulau Furir	Terlihat papan kayu berbentuk perahu serta tulang belulang pada teras ini. Gambar cadas yang ada yaitu terlihat berupa kadal, telapak tangan, lingkaran, bentuk buah “durian”, bulatan merah, lingkaran, seperti kapak lonjong, garis seperti + dan geometris, dan garis seperti bentuk U terbalik. Pada bagian teras terdapat susunan tengkorak manusia, dayung, kayu seperti badan perahu, tifa, dan struktur makam yang dianggap kuburan seorang putri laut atau dikenal putri duyung. Penggunaan warna gambar cadas terlihat merah, kuning dan ungu?.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723628145/xkeqnvtdzdbtyukkqrsh.jpg}	-	2	4	2024-08-14 16:35:48.799+07	2024-08-14 16:35:48.799+07
31	edd52d4d-a244-4571-a3e6-a5556c0e1ab0	Situs Bedaramo		132°37’50.9” BT	2°43’22.8” LS	Papua Barat	Fak-Fak	Arguni 	Kampung/pulau Furir	Kampung/pulau Furir	Gambar Telapak Tangan hingga Lengan berwarna merah, Gambar Bulatan, Gambar Titik-titik. Kondisi gambar sudah rusak	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723628442/slqbxvnvncgumsgy28pf.jpg}	-	2	4	2024-08-14 16:40:45.157+07	2024-08-14 16:40:45.157+07
32	4aaebd0d-eba2-44a7-b269-077babcc2c0e	Situs Bosu’ummata		132°35’11.2” BT	2°41’32.3” LS	Papua Barat	Fak-Fak	Arguni 	Kampung/pulau Fior	Kampung/pulau Fior	Pada tebing yang berada di timur laut terdapat Gambar Matutuo dengan ukuran yang cukup besar, Gambar seperti gagang tongkat/bumerang?, Gambar Telapak Tangan, Gambar Bulatan-bulatan merah, Gambar garis-garis dan lelehan warna merah yang memanjang ke bawah berada di sudut tebing. Keletakan gambar berada pada ketinggian 4 meter dari permukaan air laut. Pada sudut tebing yang menghadap ke barat dengan ketinggian 2 – 3 meter dari permukaan air laut gambar-gambar berwarna merah ditempatkan pada ceruk-ceruk dinding. pada bagian ceruk ini terdapat pilar, stalagmit dan stalaktit. Terlihat gambar berupa setengah lingkaran, telapak tangan, bulatan warna kuning, bulatan merah. Penggambaran telapak tangan terlihat diselingi warna kuning. Pada bagian atas tebing ini terdapat dinding yang terlihat seperti ceruk dengan ketinggian 25 meter dari permukaan air laut, posisinya jika ditarik lurus ke atas berada tepat di sudut tebing. Pada posisi tersebut terdapat gambar telapak tangan hingga setengah lengan berwarna merah orientasi ke atas dan bagian bawahnya terdapat dua gambar pola geometris saling silang berjajar berwarna merah. Penempatannya pada dinding tebing berwarna putih. Terdapat pepohonan pada sekitar gambar. Orientasi tebing ke barat. Selanjutnya pada sebelah kanan dari sudut tebing terdapat gambar pada posisi di ketinggian 15 meter dari permukaan air laut dengan arah hadap ke barat. Gambar berupa telapak tangan hingga lengan dan telapak tangan hingga pergelangan orientasi ke atas dengan kondisi yang aus dan berwarna merah. Terlihat pula gambar telapak tangan orientasi ke kanan. Di samping gambar telapak tangan terdapat gambar berbentuk makhluk menyerupai naga ? dengan bentuk garis-garis silang pada bagian badan. Makhluk ini juga memiliki ekor yang dibentuk garis-garis. Pada bagian bawah gambar gambar tersebut masih terlihat bentuk telapak tangan dan bulatan-bulatan merah, tersebar pada beberapa bidang tebing.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723628564/ezo5fe2khnsopgapzfpk.jpg}	-	2	4	2024-08-14 16:42:47.424+07	2024-08-14 16:42:47.424+07
34	4a8fca4e-6281-44d5-9b45-1d760a99843d	Sumber Air (Bak Air)		02°55’ 36.6”LS	132°18’ 30.8”BT	Papua Barat	Fak-Fak	Distrik Fakfak 	Fakfak Selatan 	Fakfak Selatan 	Bangunan\r\n	Direktori Cagar Budaya_Fakfak	{https://res.cloudinary.com/djyztox08/image/upload/v1723629318/dmluptaacu72wijinjvo.jpg}	-	2	2	2024-08-14 16:55:21.115+07	2024-08-14 16:55:21.115+07
33	325cf41f-2749-4a9c-93af-b5d8655d3686	Tempat Landasan Meriam		02° 55’ 37.6”LS	132° 18’ 21.0”BT	Papua Barat	Fak-Fak	Distrik Fakfak 	Fakfak Selatan 		Bangunan bulat\r\n	Direktori Cagar Budaya_Fakfak	{https://res.cloudinary.com/djyztox08/image/upload/v1723629181/sygx9cvsh3xkqhtw2n5s.jpg}	-	2	2	2024-08-14 16:53:04.6+07	2024-08-14 16:55:30.819+07
35	5d711eae-0ad0-444f-94ae-50caac0eaa0d	RaungWao		03°47’45.9’’S	134002’49.1’’E	Papua Barat	Kaimana			kampung Lobo/Teluk Triton	TEMPAT PERLINDUNGAN\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723629475/nfnbj0f7njh4uungpq6b.jpg}	-	2	2	2024-08-14 16:57:58.089+07	2024-08-14 16:57:58.089+07
37	82ecabb5-6333-451b-bc5e-496c2783e6d6	Situs Ermun		03°49’12.0’’S	133°59’45.9’’E	Papua Barat	Kaimana		kampung Lobo/Teluk Triton	kampung Lobo/Teluk Triton	PENGUBURAN\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723629758/cjksdgwtahg0pa4fg9oq.jpg}	-	2	5	2024-08-14 17:02:41.3+07	2024-08-14 17:02:41.3+07
38	933edd89-4e50-4258-8901-5d58df46b445	Masjid Patimburak 		02° 43’ 22.4”LS	132° 25’ 39.2”BT	Papua Barat	Fak-Fak	Distrik Kokas	Kampung Patimburak 	Kampung Patimburak 	Masjid Patimburak adalah salah satu masjid tertua di Papua Barat, bahkan di seluruh tanah Papua. Masjid ini tidak hanya menjadi tempat ibadah, tetapi juga menjadi saksi bisu perjalanan Islam di wilayah Fakfak dan sekitarnya.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723630053/tzdsiopbaorflcc1blkg.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723630053/rjwsogfzwzzyjkwsdczp.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723630053/brcntcts0qibetc3e5rw.jpg}	-	2	2	2024-08-14 17:07:36.608+07	2024-08-14 17:07:36.608+07
39	de79be16-8047-4b2c-a3a8-3eb70e4f8533	Masjid Merapi 		132° 19’ 10.1”BT	02° 56’ 23.1”LS	Papua Barat	Fak-Fak	Distrik Fakfak Tengah 	Danaweria 	Danaweria 		-	{https://res.cloudinary.com/djyztox08/image/upload/v1723630183/hwjlvqzpazkhimsamlfz.jpg}	-	2	2	2024-08-14 17:09:46.38+07	2024-08-14 17:09:46.38+07
40	ebd37a80-9242-4eab-a5fd-8dd3cc6a4ac0	Rumah Guru 		132° 19’ 17.8”BT	02° 56’ 15.5”LS	Papua Barat	Fak-Fak	Distrik Fakfak Tengah          	Danaweria 	Danaweria 		-	{https://res.cloudinary.com/djyztox08/image/upload/v1723630283/oqwnsdh4fopbabeiyzop.jpg}	-	2	2	2024-08-14 17:11:25.983+07	2024-08-14 17:11:25.983+07
41	c50dc7ab-d357-4082-ac7c-18608544ea75	Rumah Sakit Misi 	-	132° 05’ 29.9”BT	02° 42’ 49.6”LS	Papua Barat	Fak-Fak	Distrik Fakfak 	Fakfak Selatan  	-	Bangunan\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723630954/efwvvgi86yul7yashxtj.jpg}	-	2	2	2024-08-14 17:22:37.449+07	2024-08-14 17:23:34.038+07
42	8207828c-d9a2-4c03-bcbc-f362fb89d63d	Rumah Kapitan		132°19’ 15.0”BT	02° 56’ 16.2” LS	Papua Barat	Fak-Fak	Distrik Fakfak Tengah          	Danaweria 	-	Bangunan\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723631104/aq9asmo1msgbakosnyql.jpg}	-	1	2	2024-08-14 17:25:07.687+07	2024-08-14 17:25:07.687+07
43	8d445b73-4f4b-4717-abe3-3202f8795725	Masjid Rumbati 		132° 03’ 01.2”BT	02° 43’ 52.6”LS	Papua Barat	Fak-Fak	Distrik Furwagi 	Rumbati 	Rumbati 	Bangunan\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723631248/hvrgydynm4ratrxr05g1.jpg}	-	1	2	2024-08-14 17:27:31.767+07	2024-08-14 17:27:31.767+07
44	048ea28d-0358-4e6d-a874-fa7e6d35b2e2	Situs Kamaka 1.1	danau Kamaka  atau Amafata 	134° 12’ 21.7”BT	134° 12’ 21.7”BT	Papua Barat	Kaimana	Distrik Kaimana		 kampung Kamaka dan kampung Lumira	Lukisan dan pahatan atau goresan\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723631943/rb1senia4gntm2duoqug.jpg}	-	1	4	2024-08-14 17:39:06.412+07	2024-08-14 17:39:06.412+07
45	9dc91b66-3308-40e9-ae78-d361d3e51839	Situs Esrotnamba 1 	Esrotnamba	134° 17’ 15.3”BT	03° 40’ 48.6”LS	Papua Barat	Kaimana	Distrik Kaimana	Esrotnamba	Esrotnamba	GAMBAR CADAS\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723632035/rqte8vdigysanp4vbymf.jpg}	-	1	4	2024-08-14 17:40:38.504+07	2024-08-14 17:40:38.504+07
46	a4716e52-d22e-4adb-ae5c-14387fae22d2	Situs  Suanggini 	Tanjung Korbiena	134°32’01.2”BT	02°24’42.1”LS	Papua Barat	Teluk Wondama	Distrik Roon Pulau Roon		kampung Kayob/ Sariay	Lukisan,Gerabah dan tulang manusia\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723632147/mvc6bnjdfkg5cc76eun6.jpg}	-	1	4	2024-08-14 17:42:31.022+07	2024-08-14 17:42:31.022+07
47	ed194849-3a62-4a40-993e-a4d0449634c1	Situs Gua Ayapo		132º41´21.8´´	02º47´06.2´´	Papua Barat	Fak-Fak	Distrik Mbahamdandara		Kampung Goras	Situs ini merupakan gua dengan arah hadap utara selatan, tinggalan arkeologis yang terdapat pada situs ini antara lain fragmen gerabah, tulang, kerang dan artefak batu\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723632220/sjdiqftyr1zppyjayrb9.jpg}	-	1	4	2024-08-14 17:43:42.847+07	2024-08-14 17:43:42.847+07
48	50b4d0da-dd58-4174-ba68-e703feedda0a	Situs Tabaunin Matan		132°25’52.5”	 02°36’59.0”	Papua Barat	Fak-Fak	Kokas		Kampung Ugar	Situs ini berupa cerukan yang menghadap ke arah barat dengan tinggalan arkeologis berupa gambar telapak tangan, bulatan, ikan dan gambar yang tidak teridentifikasi.\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723632343/mg8n82kr2nh35ajutml1.jpg}	-	1	4	2024-08-14 17:45:46.43+07	2024-08-14 17:45:46.43+07
49	25ad21af-5934-42fe-a0f3-46a1bf25e223	Rumah Raja Arguni 		02°39’ 12.4”LS	 132° 32’ 43.6”BT	Papua Barat	Fak-Fak	Distrik Arguni 		Kampung Arguni	Bangunan\r\n\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723632528/vlingf0avseeix87lcex.jpg}	-	1	2	2024-08-14 17:48:51.418+07	2024-08-14 17:48:51.418+07
50	65e12f6b-48cb-49e0-b477-9765092ce6f4	Asrama Polisi 		02°42′02.65′′ S	132°26′25.63′′ E	Papua Barat	Fak-Fak	Kokas		Jln. Pelita 		-	{https://res.cloudinary.com/djyztox08/image/upload/v1723632766/ffctuqcqwqizfmwryh3f.jpg}	-	1	2	2024-08-14 17:52:49.322+07	2024-08-14 17:52:49.322+07
51	7fc4feb7-6aa0-4fe9-bb45-2c59b8ca2016	Perkampungan Koka' Lama 		02°42′23.29′′ S	132°27′12.81′′ E	Papua Barat	Fak-Fak	Kokas 		Sekar Sosar	Kompleks Makam, Bekas Pemukiman, sumber air (kolam), dan lahan pertanian\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723632863/qawbajt8su6qrn07e4or.jpg}	-	1	5	2024-08-14 17:54:26.485+07	2024-08-14 17:54:26.485+07
52	f2eee5e1-82ea-495c-8d31-a3e39d9919d5	Rumah dinas pertamina lainnya		131.26654108	-0.8817334	Papua Barat Daya	Sorong					-	{https://res.cloudinary.com/djyztox08/image/upload/v1723633038/stez2v9pfoghuorgm0sw.jpg}	-	1	2	2024-08-14 17:57:21.021+07	2024-08-14 17:57:21.021+07
53	c1b8ce34-c1b4-4b2c-afe1-f00ddcd0581d	Sora’a 		132°37’ 55.1”BT	02°43’ 24.2” LS	Papua Barat	Fak-Fak	Distrik Arguni 		Kampung Furir 	Terletak di sebelah timur kampung Furir Terdapat yang berada di bagian teras, tumpukan piring, tulang tengkorak yang dibungkus dengan kain putih. Pada bagian dinding dan langit-langitnya terdapat gambar berwarna merah berupa tangan, kaki, segi empat, geometris, kelopak bunga, tombak, ikan, kadal,ubur-ubur, manusia, lingkaran dan bulatan merah serta antropomorfis (2017). Gambar cadas berupa telapak tangan, persegi empat, kelopak bunga berwarna kuning, kadal, geometris, lingkaran, ikan, gagang tombak, kadal, matutuo, figur manusia, hewan dengan bentuk memiliki sayap (bentuk dinosaurus?), telapak kaki, tattoo, ubur-ubur, simbol, garis-garis, bulatan-bulatan, suluran, sisir bambu, antropomorfis, abstrak, garis lengkung, persegi, segi tiga, belah ketupat, zigzag, sisir bambu, kelopak, menyerupai bentuk kapak dengan pola tajaman lengkung, bunga/daun, “mahkota”, seperti mata tombak, Pada dinding dekat pilar terdapat motif bunga dengan pola garis-garis bagian bawahnya menyerupai mahkota. Terdapat lima gambar telapak yang telah pudar warnanya. Penggunaan warna berupa merah dan kuning. Terlihat jari tangan ada yang ditekuk atau seperti terpotong? ; pada jari telunjuk, jari kelingking, bahkan ada jari runcing. Penggambaran telapak tangan menggunakan warna merah dan kuning. Pada bagian utara teras terdapat struktur makam, bekal kubur dan beberapa susunan tengkorak manusia (2021)\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723635008/g93yg3o2zywbyru37dnk.jpg}	-	1	5	2024-08-14 18:30:11.423+07	2024-08-14 18:30:11.423+07
54	838dfea0-0b9b-4d56-ad25-1155c8cf56a9	Pulau Fani		131°15’28.20”BT	01°02’48.12”LU	Papua Barat Daya	Raja Ampat	Kepulauan Ayau		Pulau Fani	EXKAVASI, TEMUAN TULANG PENYU,KARAPAS PENYU,MANIK'MANIK\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723635117/aaibfkwqgcti7gmlthqk.jpg}	-	1	5	2024-08-14 18:32:00.16+07	2024-08-14 18:32:00.16+07
55	7d5c0ac6-abc1-4960-83ce-2ebee31a6a6a	Pulau Kecil Middleburg				Papua Barat Daya	Tambrauw	Distrik Bikar	Kampung Werur/Pulau Miossu/Pulau Kecil Middleburg	Kampung Werur/Pulau Miossu/Pulau Kecil Middleburg	Drum Besi, Tabung Las Karbit, Sumur Tua Sekutu, Pengait Lempengan Baja Landasan Pesawat, Selongsong Peluru, Peluru, Fragmen Almunium, Fragmen Botol Kaca, Fragmen Dasar Botol, Botol, Fragmen Besi, Fragmen Ikat Pinggang, Fragmen Pipa Mesin, Fragmen Busi, Fragmen Isolator Listrik.\r\n	Penelitian Pulau Terdepan Miossu_Tambraw	{https://res.cloudinary.com/djyztox08/image/upload/v1723635199/obadney9vlbrfpnrdxuo.jpg}	-	1	5	2024-08-14 18:33:22.43+07	2024-08-14 18:34:20.917+07
56	32e80eb6-a5fc-4231-919e-5a1b3a79d849	Kampung Beimousi		133°54’52.2” E	1°19’14.4” S	Papua Barat	Pengunungan Arfak	Disrik Anggi Gigi	Kampung Beimousi	Kampung Beimousi	Rumah kaki seribu orang Arfak, Ikat Kepala, Kalung Acemo” (Bahasa Sough), Cawat ”Une” (Bahasa Sough), \r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723635403/rd7lext58syqufrweldl.jpg}	-	1	5	2024-08-14 18:36:46.129+07	2024-08-14 18:36:46.129+07
57	545c118f-a2a7-426a-843e-3b398f7ffcd9	Kampung Lopintol		130°53’44.5’’BT	0°18’53.9’’ LS	Papua Barat Daya	Raja Ampat	Distrik Waigeo 	Kampung Lopintol	Kampung Lopintol	Perahu tradisional, alat dayung, penangkap ikan, dan mengenal waktu untuk mencari ikan\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723635548/vpzb8c41uxkd8wt8mxyc.jpg}	-	1	5	2024-08-14 18:39:11.078+07	2024-08-14 18:39:11.078+07
58	ceee791a-bdab-47c0-810e-0d6716f393e2	Pulau Besar Amsterdam				Papua Barat Daya	Tambrauw	Distrik Bikar	Kampung Werur/Pulau Miossu/Pulau Besar Amsterdam	Kampung Werur/Pulau Miossu/Pulau Besar Amsterdam	Artefak yang ditemukan tersebar di pulau yaitu, Fragmen Keramik, Fragmen Stoneware, Proyektil Peluru, Rantai Tempat Air Minum, Botol Kecil, Batu Baterai\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723635725/jamym89gdlp2cpjxvedp.jpg}	-	1	5	2024-08-14 18:42:08.039+07	2024-08-14 18:42:08.039+07
59	66762a90-1347-49f7-92cb-e00bda6b6541	pemukiman lama	Bekas Pemukiman Pegawai Belanda	131°16' 32.449" E	0°52' 53.470" S	Papua Barat Daya	Sorong Selatan		Klamono 			-	{https://res.cloudinary.com/djyztox08/image/upload/v1723635838/n1wm4jopgiaz1zjppr79.jpg}	-	1	5	2024-08-14 18:44:01.29+07	2024-08-14 18:44:01.29+07
60	f68417eb-d6ee-4329-bb90-b01bb957b003	Kampung Tobian		133°56’23.88” E 	1°.22’65.5” S 	Papua Barat	Pengunungan Arfak	Distrik Anggi Gida	Kampung Tobian	Kampung Tobian	Rakit, ”irgemaga” (bahasa Sough) ”irka” (bahasa Hatam)\r\n	Laporan Potensi Arkeologi Maritim _Waigeo_Raja Ampat	{https://res.cloudinary.com/djyztox08/image/upload/v1723635961/raadccmipf8gima2pb6x.jpg}	-	1	5	2024-08-14 18:46:04.224+07	2024-08-14 18:46:04.224+07
61	69e166f2-37ae-418d-a87e-cfc2af16e89e	Dermaga Rakyat Waisai		130°49’26.5’’ BT	0°25’33.4’’ LS 	Papua Barat Daya	Raja Ampat	Distrik Waigeo 			Pelabuhan perahu-perahu masyarakat\r\n	Laporan Potensi Arkeologi Maritim _Waigeo_Raja Ampat	{https://res.cloudinary.com/djyztox08/image/upload/v1723636044/oqzipveqvhtczkamab8s.jpg}	-	1	5	2024-08-14 18:47:27.625+07	2024-08-14 18:47:27.625+07
62	46ffc22a-6575-458d-986d-fbc128ac7ecf	Hunian Prasejarah di Teluk Berau		132°32’53.7” BT	2°39’00.0” LS	Papua Barat	Fak-Fak	Distrik Mbahamdandara	Kampung Arguni	Kampung Arguni	Dalam Kotak Ekskavasi ditemukan Serpih, Moluska, Fragmen Gerabah, Kapak Batu, Tulang, Arang, Mata Panah, Alat Tulang, Calon Alat. Dan Perhiasan.\r\n	Okupasi Hunian Prasejarah_Teluk Berau_Fakfak	{https://res.cloudinary.com/djyztox08/image/upload/v1723636226/fnefhqvefhqw6kxjdqqt.jpg}	-	1	5	2024-08-14 18:50:29.894+07	2024-08-14 18:50:29.894+07
2	5be99fd4-2aaf-4ebd-a03c-0319dcbb72b6	Bunker Samsomjoi	-	0399342	9901700	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam		Pak Tobias	{https://res.cloudinary.com/djyztox08/image/upload/v1723713203/abn8lslicdlsrltkn05g.png}	-	1	3	2024-08-14 14:46:27.89+07	2024-08-15 16:13:28.309+07
4	613b5472-2c42-47c0-b6a3-1e4ea7334e83	Bunker Tanjung Manggewa	-	0°55'18,25''LS	134°06'36,87''BT	Papua Barat	Manokwari	Distrik Manokwari Timur	Desa Mansinam	Desa Mansinam		Pak Tobias	{https://res.cloudinary.com/djyztox08/image/upload/v1723713535/yhzdqrkjrcda2tdowvq1.png,https://res.cloudinary.com/djyztox08/image/upload/v1723713539/ygk5zvpgni2w7gxi1opi.png}	-	1	3	2024-08-14 14:49:43.773+07	2024-08-15 16:19:03.971+07
63	725b0ca5-7123-4fa5-a6a1-50564345950e	SD Gereja St Agustinus				Papua Barat	Manokwari	kecamatan manokwari timur					{https://res.cloudinary.com/djyztox08/image/upload/v1723715294/qfvpwzu0egaxhh4gwgvs.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723715290/owhyi92hdbreba38tfar.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723715300/fmtdsxr4vzrdrylcm9oj.jpg}		1	2	2024-08-15 16:48:25.629+07	2024-08-15 16:48:25.629+07
64	d8322151-c1dd-4a2b-a6a5-8930787d8a18	Stt Erikson Tritt				Papua Barat	Manokwari Selatan	Momi Waren					{https://res.cloudinary.com/djyztox08/image/upload/v1723715475/c1zm3xjzxtmcnonjpjp0.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723715475/bpojahzcvr7nssix201i.jpg}		1	4	2024-08-15 16:51:19.769+07	2024-08-15 16:51:19.769+07
65	31c31ce5-a835-47ff-bb89-05658a62cff6	Tugu Jepang	Tugu Pendaratan Jepang	0° 53' 54.799 " LU 	134° 5' 134 " BT	Papua Barat	Manokwari	Manokwari Barat	Amban	Amban	Tugu Jepang di Amban, Manokwari, adalah monumen bersejarah yang terletak di kawasan Taman Wisata Alam Gunung Meja. Monumen ini dibangun untuk memperingati pendaratan dan pendudukan tentara Jepang di Manokwari selama Perang Dunia II12\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723772136/vtvm4xf5qmlunxxherce.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723772133/gace2bbwp6fxyco2grzq.jpg}	-	1	3	2024-08-16 08:35:42.516+07	2024-08-16 08:35:42.516+07
66	f442da4f-0a85-410c-8775-6858ba609301	Tugu Jepang	Tugu Pendaratan Jepang	0° 53' 54.799 " LU 	134° 5' 134 " BT	Papua Barat	Manokwari	Manokwari Barat	Amban	Amban	Tugu Jepang di Amban, Manokwari, adalah monumen bersejarah yang terletak di kawasan Taman Wisata Alam Gunung Meja. Monumen ini dibangun untuk memperingati pendaratan dan pendudukan tentara Jepang di Manokwari selama Perang Dunia II12\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723772022/jsy7spetotldd8kcqemt.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723772037/oyfsdeq4h63lwcny7gvu.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723772034/ylpkicwodh8vtmtr5oqj.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723772039/snvsgtv7ap37pra6ui5o.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723772036/i7qevewkksr9jv2lmzcf.jpg,NULL,https://res.cloudinary.com/djyztox08/image/upload/v1723772036/dl5cw5jlxlwdrlnyowta.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723772037/it7twxhnygjkbhjiw0ec.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723772037/jqixnjmybxcs63nngpop.jpg}	-	1	3	2024-08-16 09:00:47.712+07	2024-08-16 09:00:47.712+07
67	a9da8f46-8375-4f62-a5fe-c3efb839c890	dsvf											{https://res.cloudinary.com/djyztox08/image/upload/v1725182832/l9elceptdk02ilzbtqmk.jpg}		1	1	2024-09-01 16:27:18.796+07	2024-09-01 16:27:18.796+07
\.


--
-- Data for Name: DataOPKs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."DataOPKs" (id, uuid, nama, etnis, jenis, aksara, dialek, fungsi, kegunaan, bahan, bahasa, pencipta, perlengkapan, nilai_moral, aturan, jml_pemain, provinsi, kabupaten, kecamatan, kelurahan, dusun, deskripsi, narasumber, "imageUrl", "documenUrl", "userId", "categoryId", "createdAt", "updatedAt") FROM stdin;
2	3f30f06d-4497-468c-bbd0-d567a062fec0	Asal Mula Kain Timur	-	-											0	Papua Barat Daya	Sorong				Semua Kecamatan yang ada dikota Sorong	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723636529/qc1vzawbp95ttwyr8aqs.jpg}	-	1	1	2024-08-14 18:55:32.055+07	2024-08-14 18:55:32.055+07
3	c4aee348-6752-4dd3-9929-fe39ec8fc613	Asal Mula Kata Mandacan	-	-											0	Papua Barat	Pengunungan Arfak					-	{https://res.cloudinary.com/djyztox08/image/upload/v1723636606/rxp1tgzpk7hxuzlryz6z.jpg}	-	1	1	2024-08-14 18:56:49.934+07	2024-08-14 19:02:45.224+07
4	d8180a51-3c5b-4f4f-a0b0-dcdc664dc8cd	Tarian Senawuon	-	-											0	Papua Barat	Tambrauw					-	{https://res.cloudinary.com/djyztox08/image/upload/v1723637086/zcbxjggdrudu4jjrz42n.jpg}	-	1	1	2024-08-14 19:04:49.763+07	2024-08-14 19:04:49.763+07
5	ed6ea806-7e0d-4558-b077-9ef634d99f05	Salara Orang Karon	-	Seni Pertunjukan											0	Papua Barat	Manokwari					-	{https://res.cloudinary.com/djyztox08/image/upload/v1723637266/irvzvtthg1uobz8xathq.jpg}	-	1	1	2024-08-14 19:07:49.438+07	2024-08-14 19:07:49.438+07
6	ba733441-7f94-4432-a156-3ddbab8f6434	Suling Tambur	Raja Ampat	Seni Pertunjukan 			Suling Tambur sering digunakan sebagai pengiring tarian tradisional, seperti tarian perang atau tarian adat lainnya.								0	Papua Barat Daya	Raja Ampat				Suling Tambur adalah salah satu bentuk kesenian musik tradisional yang berasal dari Papua, Indonesia. Musik ini sangat khas dengan kombinasi unik antara suara suling yang merdu dan irama tambur yang bertenaga. Suling Tambur umumnya dimainkan dalam kelompok, dengan suling sebagai melodi utama dan tambur sebagai pengiring irama.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723650723/j3ozrafbvs9snrki3msg.jpg}	-	1	5	2024-08-14 22:52:07.834+07	2024-08-14 22:52:07.834+07
7	46d6bf2a-bb1b-49d9-9c4b-a12d4d5da365	Tarian Wo dan Nyanyian Kenko Kla		Seni Pertunjukan 			Tarian Wo dapat berfungsi sebagai sarana komunikasi, ekspresi perasaan, atau ritual keagamaan. 								0	Papua Barat Daya	Raja Ampat				Tarian Wo dan Nyanyian Kenko Kla adalah dua bentuk seni pertunjukan yang kaya akan makna dan sejarah, berasal dari tanah Papua yang kaya akan keberagaman budaya. 	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723652871/kmwg9d3rebifvtxxnynk.jpg}	-	1	5	2024-08-14 23:27:55.425+07	2024-08-14 23:27:55.425+07
8	a423d27e-2694-4a8a-b974-646571b875d1	Sistem Kepemilikan Tanah Ulayat	Banyak suku	Hukum adat											0	Papua Barat	Manokwari				Sistem kepemilikan tanah yang berdasarkan warisan turun-temurun dan memiliki nilai sakral.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723653609/rmehalizz6bmbhffcwz9.jpg}	-	3	3	2024-08-14 23:40:14.513+07	2024-08-14 23:40:14.513+07
10	3fa2a3f9-d970-4c01-b22c-123d6064631e	Toch Mi, Uon/Wion, Fenya Mikiar													0	Papua Barat Daya	Maybrat					-	{https://res.cloudinary.com/djyztox08/image/upload/v1723654230/bxfe6jo03bhqudf1isgg.jpg}	-	3	3	2024-08-14 23:50:34.673+07	2024-08-14 23:50:34.673+07
11	e3a522bf-a910-4aa7-9064-a3a1b27e55d2	Toch Mi, Uon/Wion, Fenya Mikiar													0	Papua Barat Daya	Maybrat	Semua kecamatan				-	{https://res.cloudinary.com/djyztox08/image/upload/v1723654366/vt1wbztecrxtyefqneqj.jpg}	-	3	4	2024-08-14 23:52:50.706+07	2024-08-14 23:52:50.706+07
13	baecef6e-b253-4b54-b32b-7bad44f5c95b	Bahasa Tehit	Tehit		Latin	Beragam dialek									0	Papua Barat Daya	Sorong Selatan					-	{https://res.cloudinary.com/djyztox08/image/upload/v1723654820/hqpz3jbktekr44wbru81.jpg}	-	3	6	2024-08-15 00:00:24.042+07	2024-08-15 00:00:24.042+07
12	3bd6da4c-ae5f-4369-b3a8-3d83336d05e3	Bahasa Maibrat	Maibrat		Latin	Beragam dialek									0	Papua Barat Daya	Maybrat					-	{https://res.cloudinary.com/djyztox08/image/upload/v1723654723/pkgck29obvcxsugm7zha.jpg}	-	3	6	2024-08-14 23:58:47.265+07	2024-08-15 00:00:31.215+07
14	d38708a0-7369-4177-ac15-f701011ad905	Bahasa Moi	Moi		Latin	Beragam dialek									0	Papua Barat Daya	Kota Sorong					-	{https://res.cloudinary.com/djyztox08/image/upload/v1723654881/nwqadwdvmd5tly5rrnyh.jpg}	-	3	6	2024-08-15 00:01:25.714+07	2024-08-15 00:01:25.714+07
15	fc53ca69-9d8c-4d07-b9ad-523bc0c3610d	Bahasa Abun	Abun		Latin	Beragam dialek									0	Papua Barat Daya	Tambrauw					-	{https://res.cloudinary.com/djyztox08/image/upload/v1723655055/fsrrqumobrmm6asnqki1.jpg}	-	3	6	2024-08-15 00:04:19.839+07	2024-08-15 00:04:19.839+07
16	d691d45e-c5dc-4b3d-9669-54c52d833261	Bahasa Meyah ( Meyakh ) 			Latin	Beragam dialek									0	Papua Barat	Manokwari					-	{https://res.cloudinary.com/djyztox08/image/upload/v1723655275/sn6cw6ksvkuweaytfjgs.jpg}	-	3	6	2024-08-15 00:07:59.624+07	2024-08-15 00:07:59.624+07
17	304f9a89-bd8b-4254-94f6-e0ecfc941dfc	Bahasa As			Latin										0	Papua Barat Daya	Sorong				Bahasa As dituturkan oleh masyarakat di Kampung Asbaken, Distrik Makbon, Kabupaten Sorong, Provinsi Papua Barat. Kampung Asbaken merupakan daerah pantai 	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723655564/vwxs3jwg7l3xfknjd8kp.jpg}	-	1	6	2024-08-15 00:12:48.897+07	2024-08-15 00:12:48.897+07
18	e4709ab3-2c4d-403d-ad8a-c6f20f99512e	Bahasa Dusner (Usner) 													0	Papua Barat	Teluk Wondama				Bahasa Dusner (Usner) dituturkan di Kampung Siwosawo (Dusner), Distrik Kuri Wamesa, Kabupaten Teluk Wondama, Provinsi Papua Barat.  Menurut pengakuan penduduk, di sebelah timur dan utara Kampung Siwosawo dituturkan bahasa Wandamen, di sebelah barat dituturkan bahasa Kuri, dan di sebelah selatan dituturkan bahasa Ambumi. 	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723655662/c0ym8u54lfowzzyek0gp.jpg}	-	1	6	2024-08-15 00:14:25.89+07	2024-08-15 00:14:25.89+07
19	453af577-c663-48aa-86ec-adfd7b331b2a	Bahasa Girimora 			Latin										0	Papua Barat	Kaimana				Bahasa Girimora dituturkan di di Kampung Siawatan (RT Avona), Distrik Teluk Etna, Kabupaten Kaimana, Provinsi Papua Barat. Bahasa Girimora dituturkan pula oleh masyarakat Kampung Erega, Kiruru, Etahima, dan Warifi. Masyarakat di Kampung Siawatan ada juga yang bertutur dalam bahasa Yuafeta. Kampung ini terletak di pantai yang penghuninya merupakan etnik Girimora. 	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723655782/uxgbd4mz1kqum2vi2ve9.jpg}	-	1	6	2024-08-15 00:16:26.784+07	2024-08-15 00:16:26.784+07
20	26fa8657-4e37-44f9-b7bb-181649d96768	Bahasa Inanwatan 			latin										0	Papua Barat Daya	Sorong Selatan				Bahasa Inanwatan dituturkan di Kampung Mate, Distrik Inanwatan, Kabupten Sorong Selatan, Provinsi Papua Barat Daya. Menurut pengakuan penduduk, bahasa itu dituturkan juga oleh penduduk suku Birau yang mendiami beberapa kampung di wilayah sebelah utara Kampung Mate, antara lain, di Kampung Sibae, Wadoi, Mogibi, Solta Baru, dan Serkos. 	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723655887/me8406tj4ttphkrbmyaq.jpg}	-	1	6	2024-08-15 00:18:11.41+07	2024-08-15 00:18:11.41+07
9	cad3325f-ad25-40b1-8899-f626ca740004	Sistem Kasta	Beberapa suku	Adat Sosial											0	Papua Barat	Manokwari				Pembagian masyarakat menjadi beberapa kelompok berdasarkan status sosial, kekayaan, atau keturunan.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723715709/m0zq3yrcxwdrqugnnm7u.jpg}	-	3	3	2024-08-14 23:44:56.966+07	2024-08-15 16:55:13.691+07
21	be89a92c-e166-4490-9dca-8bfba23eb8ba	Bahasa Inora 			Latin										0	Papua Barat	Teluk Bintuni				Bahasa Inora dituturkan di Kampung Saengga, Distrik Sumuri, Kabupaten Teluk Bintuni, Provinsi Papua Barat. Bahasa ini dituturkan  juga oleh masyarakat yang berdomisili di Kampung Kelapa Dua, Tanah Merah, Onar, dan Agoda. 	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723656004/t3au5kavrdmjcppaoaax.jpg}	-	1	6	2024-08-15 00:20:08.325+07	2024-08-15 00:20:08.325+07
22	0541b57b-a78a-4ad8-995f-0b036eae6315	Bahasa Kalamang 			Latin										0	Papua Barat	Fak-Fak				Bahasa Kalamang dituturkan di Kampun Antalisa, Distrik Karas, Kabupaten Fak-Fak, Provinsi Papua Barat. Kampung lain yang menggunakan bahasa itu adalah Kampung Maas. Bahasa lain yang terdapat di kampung tersebut, antara lain bahasa Soram, bahasa Kokas, bahasa Key, dan bahasa Ternate. 	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723656086/lgbxsihcz5ozhmp3ykdp.jpg}	-	1	6	2024-08-15 00:21:30.24+07	2024-08-15 00:21:30.24+07
32	9b0c27ff-2cb0-4cc4-a4f9-0eb1138eda76	Upacara Wiat\t	Suku Moi					Spiritual, sosial							0	Papua Barat	Kaimana				Upacara adat yang dilakukan untuk memohon berkah kepada leluhur dan menjaga keseimbangan alam. Melibatkan tarian, nyanyian, dan persembahan.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723658305/w7syyb1h2pppkecgzicw.jpg}	-	3	10	2024-08-15 00:58:29.094+07	2024-08-15 00:58:29.094+07
33	44ba27b3-f345-4e7e-9749-9f8f3af49ba5	Upacara Adat Perdamaian	Berbagai Suku	Ritus Sosial											0	Papua Barat Daya	Sorong Selatan				Upacara untuk menyelesaikan konflik antar kelompok. yang melaksanakan nya dari Prov.Papua Barat dan Papua Barat Daya dan juga berbagai Kabupaten/Kota	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723658796/qaxolhw683ppxs3pku7c.jpg}	-	3	4	2024-08-15 01:06:40.502+07	2024-08-15 01:06:40.502+07
34	5904b253-a122-4805-ab22-0199ef5fd9e9	Upacara Pemberian Nama	Berbagai Suku	Siklus Hidup											0	Papua Barat	Teluk Bintuni				Upacara pemberian nama pada bayi yang baru lahir.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723658855/tqgchuaobhk3pznqkybf.jpg}	-	3	4	2024-08-15 01:07:39.582+07	2024-08-15 01:07:39.582+07
25	d6dce167-f7c7-4ac8-a4f4-6847d73b3850	Korkouria 	Baham									Tali yang kuat	Keberanian, ketangkasan, dan kepercayaan diri.	Pemain berayun menggunakan tali yang diikatkan pada titik yang tinggi.	1	Papua Barat	Fak-Fak				ermainan ini sangat menantang dan biasanya dilakukan di dekat sungai atau laut.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723657217/mc1y7gjco0bctysej3lb.jpg}	-	1	8	2024-08-15 00:40:21.236+07	2024-08-15 00:40:21.236+07
23	0fe71c94-c254-4587-9c10-216d312845e0	Kweritop 	Wambon									Tali	Kekompakan, ketangkasan, dan kesabaran.	Pemain saling mengikat tali di pergelangan tangan dan berusaha melepaskan ikatan lawan.	2	Papua Barat	Manokwari				Permainan ini sangat populer di kalangan remaja dan melatih koordinasi tangan dan mata.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723656765/od9yefah6rguf9xgdlsl.jpg}	-	1	8	2024-08-15 00:32:49.126+07	2024-08-15 00:40:43.157+07
24	bb17db7f-6b37-4c23-8dd9-985da2d24c64	Hawam 	Baham									Lembing sederhana	Kekuatan, akurasi, dan keberanian.	Pemain melempar lembing ke sasaran yang ditentukan.	2	Papua Barat	Fak-Fak				Mirip lempar lembing modern, namun dengan alat yang lebih sederhana. Dulu, permainan ini berfungsi melatih keterampilan berburu.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723656884/qctr7aqknzhpnw7d6gil.jpg}	-	1	8	2024-08-15 00:34:48.832+07	2024-08-15 00:40:55.874+07
26	81bd0de9-a749-4310-819a-ffe04edf579e	Sokong 										Tidak ada	Kekuatan fisik, keseimbangan, dan kerja sama tim.	Pemain saling mendukung untuk berdiri dalam posisi yang sulit.	2	Papua Barat Daya	Sorong Selatan				Permainan ini melatih kekuatan otot dan kerjasama antar pemain.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723657419/ql2ughfkooqpximinlgd.jpg}	-	3	8	2024-08-15 00:43:43.916+07	2024-08-15 00:43:43.916+07
27	14d1df2c-42df-479c-8817-919d0afb3a7a	Lomba Bakiak										Bakiak (alas kaki tradisional)	Keseimbangan, koordinasi, dan kerja sama tim.	Pemain berlomba berjalan atau berlari menggunakan bakiak.	2	Papua Barat Daya	Sorong				Permainan ini melatih keseimbangan dan koordinasi tubuh.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723657577/yv9itaku6e8p943b8gc4.jpg}	-	3	8	2024-08-15 00:46:21.325+07	2024-08-15 00:46:21.325+07
28	51e67c22-bc17-42a7-8e7f-a9f698ad22a1	Sistem Kambik	Mayoritas suku di Papua Barat					Pendidikan karakter, keterampilan hidup, kepemimpinan							0	Papua Barat	Manokwari				Sistem pendidikan tradisional yang mengajarkan nilai-nilai, keterampilan berburu, bertani, dan pengetahuan alam secara turun-temurun.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723658053/k8mpnfnwug1razqyxwxi.jpg}	-	3	10	2024-08-15 00:54:17.625+07	2024-08-15 00:54:17.625+07
29	bdaa305c-e312-4b65-95a8-f227c1346400	Pengobatan dengan Tumbuhan Obat	Hampir semua etnis					Kesehatan							0	Papua Barat	Manokwari				Penggunaan berbagai jenis tumbuhan untuk mengobati berbagai penyakit. Misalnya, suku Moi menggunakan kulit kayu tertentu untuk mengobati luka.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723658116/cj1p6zsrdvwrcuiac54n.jpg}	-	3	10	2024-08-15 00:55:20.517+07	2024-08-15 00:55:20.517+07
30	554c2891-1a4d-4788-807f-3e78cfcacc1d	Navigasi Laut dengan Bintang	Masyarakat pesisir 					Navigasi							0	Papua Barat Daya	Raja Ampat				Kemampuan menentukan arah dan lokasi di laut menggunakan bintang-bintang sebagai panduan.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723658185/lmqd2zogc2ydanuaaabr.jpg}	-	3	10	2024-08-15 00:56:29.081+07	2024-08-15 00:56:29.081+07
31	a0505607-64f3-4a4e-9028-4be350300029	Sistem Pertanian Berteras	Suku Dani, Yali					Pertanian							0	Papua Barat	Pengunungan Arfak				Teknik pertanian dengan membuat teras-teras di lereng gunung untuk mencegah erosi dan menjaga kesuburan tanah.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723658243/ftnhrx4fjowvfvmwbtw5.jpg}	-	3	10	2024-08-15 00:57:27.149+07	2024-08-15 00:57:27.149+07
35	eb3f2699-9199-401f-af0f-f30507005eac	Upacara Inisiasi	Berbagai Suku	Siklus Hidup											0	Papua Barat Daya	Tambrauw				Upacara untuk menandai peralihan status seseorang dari anak-anak menjadi dewasa.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723658980/y0n2u9pqifaqvbkpo6fg.jpg}	-	3	4	2024-08-15 01:09:44.418+07	2024-08-15 01:09:44.418+07
36	67cc9c62-8e71-4ca1-91dc-f9bbd46ebd2e	Mambruk	Suku Moi	Keagamaan											0	Papua Barat Daya	Sorong Selatan				Rumah adat yang memiliki makna sakral dan menjadi pusat kegiatan adat.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723659084/ouvmvzs2r3s2dysaltpr.jpg}	-	1	4	2024-08-15 01:11:27.839+07	2024-08-15 01:11:27.839+07
37	390ba5c5-1b5c-4a52-b8ef-00f6346a7289	Pelaut tangguh													0	Papua Barat	Pengunungan Arfak						{https://res.cloudinary.com/djyztox08/image/upload/v1723702307/sthbcr33v2f3qxtxxyye.jpg}		3	2	2024-08-15 13:11:52.316+07	2024-08-15 13:11:52.316+07
38	f453fb77-36ba-46ac-aa52-6472e71be628	Panah ( Inyomus )													0	Papua Barat	Manokwari Selatan				Panah		{https://res.cloudinary.com/djyztox08/image/upload/v1723702498/rvaf7vofnqltg4veecjm.jpg}		3	7	2024-08-15 13:15:02.733+07	2024-08-15 13:15:02.733+07
39	eeac1f95-e902-43d0-8579-9be2d2344e63	Mancing Tradisional													0	Papua Barat	Manokwari						{https://res.cloudinary.com/djyztox08/image/upload/v1723702714/biwwr8e4hk1xzu3fwft9.jpg}		3	9	2024-08-15 13:18:39.463+07	2024-08-15 13:18:39.463+07
40	d4358ec6-b71c-483e-af6c-731286baef16	Manduk Fiek													0	Papua Barat Daya	Tambrauw						{https://res.cloudinary.com/djyztox08/image/upload/v1723703237/ea28nitlhg1u0gkcwuik.jpg}		3	5	2024-08-15 13:27:22.477+07	2024-08-15 13:27:22.477+07
41	9605e011-75e8-4e9b-a445-0b6ce7c7efd8	Ambo													0	Papua Barat Daya	Teluk Bintuni				Pengetahuan dan Kebiasaan Perilaku Mengenai Alam dan Semesta\r\n		{https://res.cloudinary.com/djyztox08/image/upload/v1723703428/isvc9tvb13gk7myfgkda.jpg}		1	10	2024-08-15 13:30:32.653+07	2024-08-15 13:31:31.461+07
42	6341caa1-aa7d-45fd-9a11-26c5e96c8c26	Jambrim Tali													0	Papua Barat	Manokwari				Pengetahuan dan Kebiasaan Perilaku Mengenai Alam dan Semesta\r\n		{https://res.cloudinary.com/djyztox08/image/upload/v1723703534/eohy8arq6xlgpubausil.jpg}		1	10	2024-08-15 13:32:19.472+07	2024-08-15 13:36:25.908+07
43	700887c8-ebf8-4410-bac7-75e102bd5442	Hayah Hbaa													0	Papua Barat	Kaimana				Pengetahuan dan Kebiasaan Perilaku Mengenai Alam dan Semesta\r\n		{https://res.cloudinary.com/djyztox08/image/upload/v1723703623/z8hmh6advqk1i6zd23rk.jpg}		1	10	2024-08-15 13:33:48.466+07	2024-08-15 13:36:33.022+07
44	90daf9bc-5a1e-41ac-8c99-2b66ec5e9e00	Siwafu													0	Papua Barat	Manokwari Selatan				Pengetahuan dan Kebiasaan Perilaku Mengenai Alam dan Semesta\r\n		{https://res.cloudinary.com/djyztox08/image/upload/v1723703745/tu87yfxsewmbjnybrlar.jpg}		1	10	2024-08-15 13:35:49.908+07	2024-08-15 13:36:41.66+07
45	798a446a-5b55-42f2-b0bc-fef34e3163bb	Susur													0	Papua Barat	Teluk Wondama				Pengetahuan dan Kebiasaan Perilaku Mengenai Alam dan Semesta\r\n		{https://res.cloudinary.com/djyztox08/image/upload/v1723703915/pylqxjk9rvexiwfggowi.jpg}		1	10	2024-08-15 13:38:39.938+07	2024-08-15 13:38:39.938+07
46	99addf22-1880-469e-82d0-7cd824830fc9	Komaa													0	Papua Barat Daya	Sorong				Pengetahuan dan Kebiasaan Perilaku Mengenai Alam dan Semesta\r\n		{https://res.cloudinary.com/djyztox08/image/upload/v1723703990/pg3lc112cmkixgiulyvz.jpg}		1	10	2024-08-15 13:39:54.725+07	2024-08-15 13:39:54.725+07
47	8cddd647-0855-4d66-8ac8-8f0a7448cc11	Mendayung Perahu													0	Papua Barat Daya	Raja Ampat						{https://res.cloudinary.com/djyztox08/image/upload/v1723704111/msvwpc4xz2bp4wj2lbbb.jpg}		1	9	2024-08-15 13:41:55.587+07	2024-08-15 13:41:55.587+07
48	b66e9fd2-983b-487d-9f3b-5c7bd3bdc560	Kelereng ( Keneke )													0	Papua Barat	Manokwari Selatan						{https://res.cloudinary.com/djyztox08/image/upload/v1723704171/tykfgkptbg16khz43rxv.jpg}		1	9	2024-08-15 13:42:56.21+07	2024-08-15 13:42:56.21+07
59	f799fb8f-b829-418d-97a9-6deb5dab75c0	GUENI (GASING)													0	Papua Barat	Teluk Bintuni						{https://res.cloudinary.com/djyztox08/image/upload/v1723705506/c2vw69bdi4fwluelrg0o.jpg}		3	8	2024-08-15 14:05:11.307+07	2024-08-15 14:05:11.307+07
49	3f27e1b8-d9b7-4b58-8479-73df07419368	Mod Aki Aksa Igkojei													0	Papua Barat	Manokwari				Olaharga ini dilaksanakan diseluruh kabupaten/kota di privinsi papua barat		{https://res.cloudinary.com/djyztox08/image/upload/v1723704352/flvqmuiy2dlnddr5bjlg.jpg}		1	9	2024-08-15 13:45:56.629+07	2024-08-15 13:51:40.378+07
50	cc13addd-7ada-4ce1-87bb-8387e3d6b56f	Renang													0	Papua Barat Daya	Raja Ampat						{https://res.cloudinary.com/djyztox08/image/upload/v1723704930/svpkhtng1iti5wzbzflh.jpg}		1	9	2024-08-15 13:55:35.022+07	2024-08-15 13:55:35.022+07
51	17c7e7b7-b01a-4743-8a62-59476b545c6e	ambeya-ngobeya(lari kecepatan tikus)													0	Papua Barat	Manokwari						{https://res.cloudinary.com/djyztox08/image/upload/v1723704966/x5obcmuysgpse35wfw8e.jpg}		1	9	2024-08-15 13:56:11.129+07	2024-08-15 13:56:11.129+07
52	b4535b88-aeea-4bf5-b0a3-b7d40ba4998b	Lomba dayung Wai Mansusu dan Wai Ron													0	Papua Barat Daya	Kaimana						{https://res.cloudinary.com/djyztox08/image/upload/v1723705010/ixb5lrsaiheajqcls0pf.jpg}		1	9	2024-08-15 13:56:54.642+07	2024-08-15 13:56:54.642+07
53	55b33173-e4bc-4664-86ef-363e6986ea0b	alom koma (jadi-jadi)													0	Papua Barat	Teluk Bintuni						{https://res.cloudinary.com/djyztox08/image/upload/v1723705111/s9usr06udff9b6ofdnlb.jpg}		3	9	2024-08-15 13:58:36.082+07	2024-08-15 13:58:36.082+07
54	8b595677-3c0b-4d7f-a707-300db7ecabdf	PANAHAN (WARLE EMEM) 													0	Papua Barat	Fak-Fak						{https://res.cloudinary.com/djyztox08/image/upload/v1723705161/xrjx5crdxqlnofniw9mx.jpg}		3	9	2024-08-15 13:59:26.056+07	2024-08-15 13:59:26.056+07
55	a680ad84-4e30-4127-a14e-f99611b9d1f0	Dayung													0	Papua Barat Daya	Kaimana						{https://res.cloudinary.com/djyztox08/image/upload/v1723705236/f7gbs3bfbrxtvs9j6lur.jpg}		3	9	2024-08-15 14:00:41.345+07	2024-08-15 14:00:41.345+07
56	b3b7dde0-d8a3-4f99-ac4b-7017c7fd2850	nonggon wakwi (panahan)													0	Papua Barat	Manokwari Selatan						{https://res.cloudinary.com/djyztox08/image/upload/v1723705320/qo6m9qmvva0x0o2ihufp.jpg}		3	9	2024-08-15 14:02:04.502+07	2024-08-15 14:02:04.502+07
57	2e148988-4f33-403d-aad3-2c80403d6880	Permainan tempurung ( tabeyensafa )													0	Papua Barat	Kaimana						{https://res.cloudinary.com/djyztox08/image/upload/v1723705418/p59qgxfo7ichi1ufmvvr.jpg}		3	8	2024-08-15 14:03:42.71+07	2024-08-15 14:03:42.71+07
58	781f13c8-2ae3-4ae3-a206-6355271f34f6	Gici-gici ( lompat simpan Batu )													0	Papua Barat	Kaimana						{https://res.cloudinary.com/djyztox08/image/upload/v1723705458/v0lbm7j8xdkxmo3afmwt.jpg}		3	8	2024-08-15 14:04:23.07+07	2024-08-15 14:04:23.07+07
60	28bfab82-bdd3-4ed9-928b-2430090dad9d	Anao Mamokermo													0	Papua Barat Daya	Maybrat						{https://res.cloudinary.com/djyztox08/image/upload/v1723705573/wgh4nggdlid4dgizwgiz.jpg}		1	8	2024-08-15 14:06:17.756+07	2024-08-15 14:06:17.756+07
61	4755b37b-a084-42a9-ae39-f75b801e0398	Ariek													0	Papua Barat Daya	Sorong Selatan						{https://res.cloudinary.com/djyztox08/image/upload/v1723705603/w0fewiynuo2lez5i9nco.jpg}		1	8	2024-08-15 14:06:48.219+07	2024-08-15 14:06:48.219+07
62	83b0a409-d493-4212-a68f-05b2fc86ea81	Kamanya Akaramo													0	Papua Barat Daya	Tambrauw						{https://res.cloudinary.com/djyztox08/image/upload/v1723705825/leytgngvli500ls2nmhc.jpg}		1	8	2024-08-15 14:10:30.074+07	2024-08-15 14:10:30.074+07
63	a1407810-5de1-4000-9c14-48befa296e21	Kaban													0	Papua Barat Daya	Raja Ampat						{https://res.cloudinary.com/djyztox08/image/upload/v1723705948/hb7flegfdzm57gy3lrxj.jpg}		1	7	2024-08-15 14:12:32.735+07	2024-08-15 14:12:32.735+07
64	5b60f280-05bc-4d56-805e-bc6ef17e494f	Bender													0	Papua Barat	Fak-Fak						{https://res.cloudinary.com/djyztox08/image/upload/v1723706011/gs12vpfk7y1xkl7y42zo.jpg}		1	7	2024-08-15 14:13:36.443+07	2024-08-15 14:13:36.443+07
66	589c8f3f-4766-4c85-bc1d-fea1ce34e49e	Rabi Munduk													0	Papua Barat	Fak-Fak						{https://res.cloudinary.com/djyztox08/image/upload/v1723706152/pagjl3isgzgir14abe82.jpg}		1	7	2024-08-15 14:15:56.893+07	2024-08-15 14:15:56.893+07
67	1ebdce31-2608-47da-abf6-f507388c5da4	Kwok kiyem (noken kecil tas tangan) mala moi													0	Papua Barat Daya	Kota Sorong						{https://res.cloudinary.com/djyztox08/image/upload/v1723706310/rk2ymvj3nths6naozqqr.jpg}		3	7	2024-08-15 14:18:34.776+07	2024-08-15 14:18:34.776+07
65	10d229ae-bc0c-455d-bc8d-826e153e3058	Kwok sai ka’apel (noken besar) mala moi													0	Papua Barat Daya	Kota Sorong						{https://res.cloudinary.com/djyztox08/image/upload/v1723706076/qhton0od7hvrjf3eqord.jpg}		1	7	2024-08-15 14:14:41.108+07	2024-08-15 14:19:40.928+07
68	f541bd2c-58ea-449e-9536-98534ec656ec	Tebede													0	Papua Barat	Fak-Fak						{https://res.cloudinary.com/djyztox08/image/upload/v1723706453/uo3qwykx45oczssi6juz.jpg}		3	7	2024-08-15 14:20:57.543+07	2024-08-15 14:20:57.543+07
69	2d5474b6-f029-4f6d-b3a8-d7abdbcd5667	Pasamairuru													0	Papua Barat	Teluk Wondama						{https://res.cloudinary.com/djyztox08/image/upload/v1723706518/agawyf5vktyfesi0wf4c.jpg}		3	7	2024-08-15 14:22:02.732+07	2024-08-15 14:22:02.732+07
70	53aa62b2-6104-4bc9-a320-9d5dec8e4dec	Pembuatan Rumah adat													0	Papua Barat Daya	Sorong Selatan						{https://res.cloudinary.com/djyztox08/image/upload/v1723706850/kql2fykjtfok6odajfdc.jpg}		3	7	2024-08-15 14:27:35.416+07	2024-08-15 14:27:35.416+07
71	bb0e54b7-0acb-40cb-8109-f9331be836c8	Keik wo’o rumah pohon (arsitektur moi)													0	Papua Barat Daya	Kota Sorong						{https://res.cloudinary.com/djyztox08/image/upload/v1723706942/mhamfiyi1oqzygnm4sne.jpg}		3	7	2024-08-15 14:29:07.049+07	2024-08-15 14:29:07.049+07
72	bcd1d1cc-178c-4aa4-aed9-c2bfcecbedf1	Wala													0	Papua Barat Daya	Raja Ampat						{https://res.cloudinary.com/djyztox08/image/upload/v1723707009/bqstzmfokx2ttvqn75nr.jpg}		3	7	2024-08-15 14:30:14.296+07	2024-08-15 14:30:14.296+07
80	dcd0046f-42db-40b5-b190-48db79f25e5a	Ris / Sifieris		Seni Pertunjukan											0	Papua Barat	Teluk Wondama						{https://res.cloudinary.com/djyztox08/image/upload/v1723708717/n6uss4whtvldmvhjmka9.jpg}		1	5	2024-08-15 14:58:42.17+07	2024-08-15 14:58:42.17+07
73	f46f3c15-982b-4c0a-a479-cb462a60e1b8	Bihim (Tari Tumbutana)	Pegaf	Seni Tari			Dilakukan kapan saja dalam acara mencari jodoh, menang perang, perdamaian antar suku, penyambutan tamu dan pernikahan.								0	Papua Barat	Pengunungan Arfak				Bihim/Tari tumbutana biasanya oleh orang Arfak disebut dengan istilah tari ular. Penyebutan ini disebabkan oleh gerak dan formasi tari yang menyerupai liukan ular mengikuti irama lagu yang yang dinyanyikan. Bihim bagi suku Arfak diartikan sebagai sebuah ekspresi yang dilakukan kapan saja dalam acara mencari jodoh, menang perang, perdamaian antar suku, penyambutan tamu dan pernikahan.		{https://res.cloudinary.com/djyztox08/image/upload/v1723707372/fecyowdx2pzwmv7ja3dy.jpg}		3	5	2024-08-15 14:36:17.36+07	2024-08-15 14:40:11.505+07
81	d782b564-15a7-4227-a533-9b5e0530855c	Igya Ser Hanjop													0	Papua Barat	Pengunungan Arfak						{https://res.cloudinary.com/djyztox08/image/upload/v1723709436/dnrkejnrcx1hy1yeuchl.jpg}		1	4	2024-08-15 15:10:41.342+07	2024-08-15 15:10:41.342+07
74	150899df-f37c-4041-a0d9-fc31a041d3d4	Tarian Wo dan Nyanyian Kenko Kla		Seni Pertunjukan 											0	Papua Barat	Teluk Wondama						{https://res.cloudinary.com/djyztox08/image/upload/v1723707658/qnxnqymxiokgfl6bnh7w.jpg}		3	5	2024-08-15 14:41:02.594+07	2024-08-15 14:41:39.839+07
75	de8449ff-114e-47aa-9e27-414d53479d15	Mamog		Seni Musik											0	Papua Barat	Teluk Bintuni						{https://res.cloudinary.com/djyztox08/image/upload/v1723707905/qqyceklabli6pufqidyy.jpg}		3	5	2024-08-15 14:45:09.931+07	2024-08-15 14:45:09.931+07
76	8608d2a3-6d21-4f40-b888-75f1eafc8af3	PUSI SAJAK LANGITKOTA SORONG		Seni Sastra											0	Papua Barat Daya	Kota Sorong						{https://res.cloudinary.com/djyztox08/image/upload/v1723707994/lhrzdirxevwueclutiko.jpg}		3	5	2024-08-15 14:46:39.156+07	2024-08-15 14:46:39.156+07
77	67903a41-1163-458d-bbfb-303fa6b967b1	Barappen													0	Papua Barat	Kaimana						{https://res.cloudinary.com/djyztox08/image/upload/v1723708064/qyfas4jqdteeezjexccn.jpg}		3	5	2024-08-15 14:47:48.866+07	2024-08-15 14:47:48.866+07
78	4cd961ef-f597-44f1-8c46-2a982f3ea816	Farbakbuk		Seni Pertunjukan											0	Papua Barat	Manokwari				Pada zaman dulu pakaian dan perhiasan suku Doreri (Sansun ma Famanggor Farbakbuk) terbuat dari beberapa jenis bahan flora dan fauna. Perhiasan biasanya dibuat dari biji-bijian rumput maupun kerang dan bambu sebagai sisir adat berhias menurut sembilan Keret/Klan.		{https://res.cloudinary.com/djyztox08/image/upload/v1723708271/ibalexbmmyskgsjl2bud.jpg}		1	5	2024-08-15 14:51:15.789+07	2024-08-15 14:51:27.543+07
79	87553e92-8e4e-46cd-a3e5-a3c5754bbf9c	Fararior		Seni Pertunjukan											0	Papua Barat	Manokwari				Di kalangan Suku Doreri, sebelum keluarga laki-laki mengadakan acara peminangan kepada seorang perempuan, pertama diadakan perundingan antara beberapa keluarga terdekat dari pihak laki-laki seperti, om-om, bapa tua, dan tete.		{https://res.cloudinary.com/djyztox08/image/upload/v1723708614/jqt3kjet9bcgjfplwhfe.jpg}		1	5	2024-08-15 14:56:59.228+07	2024-08-15 14:56:59.228+07
87	2e85f893-d731-4c5d-839d-21f1edcb3f93	Helaehili													0	Papua Barat	Manokwari						{https://res.cloudinary.com/djyztox08/image/upload/v1723709789/u4womhjtmj1o6w7xnhwj.jpg}		3	2	2024-08-15 15:16:34.434+07	2024-08-15 15:16:34.434+07
82	2aba10d0-0456-45d0-837c-b99f16fd01da	Yadnya Kasada													0	Papua Barat Daya	Tambrauw						{https://res.cloudinary.com/djyztox08/image/upload/v1723709482/iiwfritpqmexvxdt6beb.jpg}		1	4	2024-08-15 15:11:26.85+07	2024-08-15 15:11:58.941+07
83	69d27d93-9104-4991-852a-4f91962a5b54	Ombak Tiga													0	Papua Barat	Teluk Bintuni						{https://res.cloudinary.com/djyztox08/image/upload/v1723709538/of26mhpyhlyekdowhaqr.jpg}		1	4	2024-08-15 15:12:22.868+07	2024-08-15 15:12:22.868+07
84	df742702-0284-461f-b5c4-340cdbe6a67f	Upacara Vekaisu Sarak													0	Papua Barat	Teluk Wondama						{https://res.cloudinary.com/djyztox08/image/upload/v1723709572/mzh42zayqutoqc5uyjlv.jpg}		1	4	2024-08-15 15:12:57.301+07	2024-08-15 15:12:57.301+07
85	14ae21be-a2b9-4d6d-be5c-d3431aefe7e7	Prosesi pemasangan tiang Alif kubah mesjid tua 													0	Papua Barat	Kaimana						{https://res.cloudinary.com/djyztox08/image/upload/v1723709674/f4ws0cmn9uew0javv5sn.jpg}		3	4	2024-08-15 15:14:38.753+07	2024-08-15 15:14:38.753+07
86	f9c151d2-0382-46b6-ab31-0718e083d23e	Megengan													0	Papua Barat	Sorong						{https://res.cloudinary.com/djyztox08/image/upload/v1723709724/lmd4j7kasuxw8pw9rij6.jpg}		3	4	2024-08-15 15:15:29.192+07	2024-08-15 15:15:29.192+07
88	28fdddf1-f5b6-4eb6-bc00-e2ad37c4d1c1	Sireuw													0	Papua Barat	Manokwari Selatan						{https://res.cloudinary.com/djyztox08/image/upload/v1723709814/ykjxprbv1s2ttak2ym1m.jpg}		3	2	2024-08-15 15:16:59.423+07	2024-08-15 15:16:59.423+07
89	c2e5d9c3-43b2-4540-9548-02816f89c6c9	Markas Besar Umum Daerah Pasifik Barat Daya													0	Papua Barat Daya	Sorong Selatan						{https://res.cloudinary.com/djyztox08/image/upload/v1723709874/tq5lp59ouqamasemj9fu.jpg}		3	2	2024-08-15 15:17:59.112+07	2024-08-15 15:17:59.112+07
90	fb2c99c1-b521-4e4b-b182-ec75dd34357a	Morus Tere		Adat Istiadat Masyarakat, Ritus dan Perayaan-Perayaan 											0	Papua Barat	Maybrat				Suku Mey Brat adalah salah satu di antara sekian banyak suku yang mendiami daerah kepala burung di bagian barat Papua.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723711081/uxwmx5icre2cm7bgjvzj.jpg}	-	1	3	2024-08-15 15:38:06.189+07	2024-08-15 15:38:06.189+07
91	14562ce7-d3ac-43f6-87b8-81a838ecfaa9	Manwermor													0	Papua Barat	Manokwari				-	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723711407/na3amtmahagicrom4a0f.png}	-	1	3	2024-08-15 15:43:31.978+07	2024-08-15 15:43:31.978+07
92	cc7c6e7d-4388-484b-90ab-5eccfdd2cb5b	Tanam Sasi	Suku Marind	Tanam Sasi											0	Papua Barat	Manokwari				Upacara adat tanam sasi adalah upacara adat kematian yang berkembang di daerah Kabupaten Merauke dan dilaksanakan oleh suku Marind atau suku Marind-Anim. Suku Marind berada di wilayah dataran luas di Papua Barat.	Pak Tobias	{https://res.cloudinary.com/djyztox08/image/upload/v1723712103/q1rqlhlvwuodvyubzl0n.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723712101/psb3wuzkhwpxi80urcze.jpg}	-	1	3	2024-08-15 15:55:08.08+07	2024-08-15 15:55:08.08+07
1	75859d35-0a92-4a22-b55d-8fe097ff2c92	Nkahiri Omos	-	-											0	Papua Barat Daya	Sorong Selatan				Permainan loncat tali yang dimainkan oleh anak-anak perempuan. Kedua ujung tali dipegang masing-masing oleh seorang anak, kemudian diputar-putar dan beberapa anak meloncat-loncat pada putaran tali tersebut.	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723636418/n5in3c7jyhghrpo8chza.jpg}	-	1	1	2024-08-14 18:53:41.043+07	2024-08-15 16:04:32.664+07
93	f9cdeb80-5065-471f-8cce-aeb490b9a702	tanam sasi	suku di pesisir	adat											0	Papua Barat	Manokwari				 Sasi merupakan larangan adat untuk mengambil hasil alam tertentu dalam jangka waktu tertentu, yang kemudian diakhiri dengan upacara buka sasi. Tradisi ini membantu menjaga keseimbangan ekosistem dan memastikan keberlanjutan sumber daya alam bagi generasi mendatang12\r\n	-	{https://res.cloudinary.com/djyztox08/image/upload/v1723772237/jhjqihmhtoeh187yi86d.jpg,https://res.cloudinary.com/djyztox08/image/upload/v1723772237/h3zasqocytajqpzdm64e.jpg}	-	1	1	2024-08-16 08:37:23.65+07	2024-08-16 08:37:23.65+07
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20240606145446-create-cbcategory.js
20240606145446-create-opkcategory.js
20240614051455-create-user.js
20240614052201-create-data-cb.js
20240614052400-create-data-opk.js
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, "fullName", email, password, user_role, "imageUrl", refresh_token, "createdAt", "updatedAt") FROM stdin;
2	Jessika Tamba	jessika@gmail.com	$2b$10$GUMXoY0iM1qh08PGnJFaj.u5JCxNx7cSRAgsAa0Z5XmqAcxzW7CZ2	CB	{https://res.cloudinary.com/djyztox08/image/upload/v1723619237/nm8mbmsh2a9l0v2simbi.jpg}	\N	2024-08-14 14:07:20.975+07	2024-08-16 08:45:33.667+07
3	Brenda Picauly	brenda@gmail.com	$2b$10$jIBPhXHL50ecvwhbQnpyTO8xwFbD8keWiCJu5IaQZQeZqYgqjTcLS	OPK	{https://res.cloudinary.com/djyztox08/image/upload/v1723619289/unjvqmvp4z3isqwa9q3t.png}	\N	2024-08-14 14:08:12.429+07	2024-08-15 15:30:31.464+07
1	BPK Wilayah XXIII	bpkwilayah23@gmail.com	$2b$10$DIwty6asDowUbNmM.Hnqou/dc3nb3GeD944MMohD4n922Aq/uRCXy	Admin	{https://res.cloudinary.com/djyztox08/image/upload/v1723618786/x7sixdheyg7q2ugoq740.jpg}	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJCUEsgV2lsYXlhaCBYWElJSSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTcyNTE4MDc0MCwiZXhwIjoxNzI1MjY3MTQwfQ.6FPP-HUBi4S45YDU00wR4bi731FDjB6AbQf1Qd1K4IU	2024-08-14 13:59:50.144+07	2024-09-01 15:52:20.725+07
\.


--
-- Data for Name: cbCategories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."cbCategories" (id, title, "createdAt", "updatedAt") FROM stdin;
1	Benda	2024-08-14 14:04:13.087+07	2024-08-14 14:04:13.087+07
2	Bangunan	2024-08-14 14:04:34.407+07	2024-08-14 14:04:34.407+07
3	Struktur	2024-08-14 14:04:42.287+07	2024-08-14 14:04:42.287+07
4	Situs	2024-08-14 14:04:50.382+07	2024-08-14 14:04:50.382+07
5	Kawasan	2024-08-14 14:04:59.979+07	2024-08-14 14:04:59.979+07
\.


--
-- Data for Name: opkCategories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."opkCategories" (id, title, "createdAt", "updatedAt") FROM stdin;
1	Tradisi Lisan	2024-08-14 14:01:33.2+07	2024-08-14 14:01:33.2+07
2	Manuskrip	2024-08-14 14:01:44.892+07	2024-08-14 14:01:44.892+07
3	Adat Istiadat	2024-08-14 14:02:06.774+07	2024-08-14 14:02:06.774+07
4	Ritus	2024-08-14 14:02:16.617+07	2024-08-14 14:02:16.617+07
5	Seni	2024-08-14 14:02:25.309+07	2024-08-14 14:02:25.309+07
6	Bahasa	2024-08-14 14:02:36.32+07	2024-08-14 14:02:36.32+07
7	Teknologi Tradisional	2024-08-14 14:02:57.003+07	2024-08-14 14:02:57.003+07
8	Permainan Rakyat	2024-08-14 14:03:20.649+07	2024-08-14 14:03:20.649+07
9	Olahraga Tradisional	2024-08-14 14:03:37.201+07	2024-08-14 14:03:37.201+07
10	Pengetahuan Tradisional	2024-08-14 14:03:48.405+07	2024-08-14 14:03:48.405+07
\.


--
-- Name: DataCBs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."DataCBs_id_seq"', 67, true);


--
-- Name: DataOPKs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."DataOPKs_id_seq"', 93, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 4, true);


--
-- Name: cbCategories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."cbCategories_id_seq"', 7, true);


--
-- Name: opkCategories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."opkCategories_id_seq"', 10, true);


--
-- Name: DataCBs DataCBs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DataCBs"
    ADD CONSTRAINT "DataCBs_pkey" PRIMARY KEY (id);


--
-- Name: DataOPKs DataOPKs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DataOPKs"
    ADD CONSTRAINT "DataOPKs_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: cbCategories cbCategories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."cbCategories"
    ADD CONSTRAINT "cbCategories_pkey" PRIMARY KEY (id);


--
-- Name: opkCategories opkCategories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."opkCategories"
    ADD CONSTRAINT "opkCategories_pkey" PRIMARY KEY (id);


--
-- Name: DataCBs DataCBs_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DataCBs"
    ADD CONSTRAINT "DataCBs_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."cbCategories"(id);


--
-- Name: DataCBs DataCBs_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DataCBs"
    ADD CONSTRAINT "DataCBs_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id);


--
-- Name: DataOPKs DataOPKs_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DataOPKs"
    ADD CONSTRAINT "DataOPKs_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."opkCategories"(id);


--
-- Name: DataOPKs DataOPKs_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."DataOPKs"
    ADD CONSTRAINT "DataOPKs_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id);


--
-- PostgreSQL database dump complete
--

