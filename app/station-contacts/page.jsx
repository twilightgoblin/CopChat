"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import { FadeIn } from "@/components/fade-in"

// Contact details for police stations
const contactDetails = [
  { name: "SP CHIKKABALLAPURA", office: "08156-277210", mobile: "9480802501", email: "spcbpura@ksp.gov.in" },
  {
    name: "DIST.CONTROL ROOM CHIKKABALLAPURA",
    office: "08156-277211, 08156-277213, 08156-277212 (F)",
    mobile: "9480802500",
    email: "dccbpura@ksp.gov.in",
  },
  { name: "POLICE INSPECTOR(WOMEN)", mobile: "9480800934", office: "", email: "" },
  { name: "DSP CHIKKABALLAPURA", office: "08156-272426", mobile: "9480802520", email: "sdpocbpura@ksp.gov.in" },
  { name: "CIRCLE POLICE INSPECTOR CHIKKABALLAPURA CIRCLE", office: "08156-275511", mobile: "9480802530", email: "cpicbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR CHIKKABALLAPURA (T) L & O PS", office: "08156-272262", mobile: "9480802545", email: "townpscbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR CHIKKABALLAPURA (T) (CR) PS", office: "08156-272262", mobile: "9480802574", email: "ruralpscbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR CHIKKABALLAPURA I PS", office: "08156-272657", mobile: "9480802546", email: "" },
  { name: "POLICE SUB-INSPECTOR CHIKKABALLAPURA I PS", office: "08156-272657", mobile: "9480802538", email: "" },
  { name: "POLICE SUB-INSPECTOR TRAFFIC", office: "08156-275567", mobile: "9480802566", email: "cbpuratraffic@ksp.gov.in" },
  { name: "WOMEN POLICE STATION", office: "08156-275122", mobile: "", email: "womenpscbpura@ksp.gov.in" },
  { name: "NANDI HILLS PS", office: "08156-262755", mobile: "9480802562", email: "nandigiridhamapscbpura@ksp.gov.in" },
  { name: "CYBERCRIME,ECONOMIC OFFENCES, NARCOTICS (CEN) PS", office: "08156-270916", mobile: "9480802510", email: "cenpscbp@ksp.gov.in" },
  { name: "CIRCLE POLICE INSPECTOR GAURIBIDANUR CIRCLE", office: "08155-286733", mobile: "9480802531", email: "cpigbnurcbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR GAURIBIDANUR(T) PS", office: "08155-286720", mobile: "9480802547", email: "gbnurtowncbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR GAURIBIDANUR PS", office: "08155-286100", mobile: "9480802548", email: "gbnurruralcbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR GAURIBIDANUR (CR) PS", office: "08155-286100", mobile: "9480802575", email: "" },
  { name: "POLICE SUB-INSPECTOR MANCHENAHALLI PS", office: "08155-280238", mobile: "9480802549", email: "mhallicbpura@ksp.gov.in" },
  { name: "POLICE INSPECTOR GUDIBANDE PS", office: "08156-261025", mobile: "9480802560", email: "" },
  { name: "POLICE SUB-INSPECTOR GUDIBANDE", office: "08156-261025", mobile: "9480802561", email: "gbandecbpura@ksp.gov.in" },
  { name: "CIRCLE POLICE INSPECTOR BAGEPALLI CIRCLE", office: "08150-282233", mobile: "9480802532", email: "cpibpallicbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR BAGEPALLI L&O PS", office: "08150-282233", mobile: "9480802550", email: "bpallipscbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR BAGEPALLI (CR) PS", office: "08150-282233", mobile: "9480802565", email: "" },
  { name: "POLICE SUB-INSPECTOR CHELUR PS", office: "08150-280099", mobile: "9480802551", email: "chelurpscbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR PATHAPALYA PS", office: "08150-285133", mobile: "9480802552", email: "ppalyacbpura@ksp.gov.in" },
  {
    name: "DSP CHINTAMANI SUB-DIVISION",
    office: "08154-252103",
    mobile: "9480802521",
    email: "sdpocmanicbpura@ksp.gov.in",
  },
  {
    name: "PI CHINTAMANI TOWN CIRCLE",
    office: "08154-252140",
    mobile: "9480802553",
    email: "cpicmanitowncbpura@ksp.gov.in",
  },
  { name: "POLICE SUB-INSPECTOR CHINTAMANI TOWN L&O-1", office: "08154-252140", mobile: "9480802553", email: "" },
  { name: "POLICE SUB-INSPECTOR CHINTAMANI TOWN CRM", office: "08154-252140", mobile: "9480802563", email: "" },
  {
    name: "CIRCLE POLICE INSPECTOR CHINTAMANI RURAL CIRCLE",
    office: "08154-252121",
    mobile: "9480802533",
    email: "cpicmaniruralcbpura@ksp.gov.in",
  },
  { name: "POLICE SUB-INSPECTOR C.MANI I PS", office: "08154-252121", mobile: "9480802554", email: "cmaniruralcbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR KENCHARLAHALLI PS", office: "08154-258640", mobile: "9480802555", email: "khallicbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR BATLAHALLI PS", office: "08154-247265", mobile: "9480802556", email: "bhallipscbpura@ksp.gov.in" },
  { name: "CIRCLE POLICE INSPECTOR SHIDLAGHATTA CIRCLE", office: "08158-256509", mobile: "9480802534", email: "cpisghattacbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR SHIDLAGHATTA TOWN PS", office: "08158-256280", mobile: "9480802557", email: "sgattatowncbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR SHIDLAGHATTA RURAL PS", office: "08158-256270", mobile: "9480802558", email: "sgattaruralcbpura@ksp.gov.in" },
  { name: "POLICE SUB-INSPECTOR DIBBURAHALLI PS", office: "08158-258125", mobile: "9480802559", email: "dbhallicbpura@ksp.gov.in" },
  { name: "ASSISTANT AUDIT OFFICER", office: "08156-277214", mobile: "", email: "aaocbpura@ksp.gov.in" },
  { name: "DISTRICT SPECIAL BRANCH POLICE INSPECTOR (PI DSB)", mobile: "9480802507", office: "", email: "dsbcbpura@ksp.gov.in" },
  { name: "DISTRICT CRIME RECORDS BUREAU POLICE INSPECTOR (PI DCRB)", office: "08156-277215", mobile: "9480802509", email: "dcrbcbpura@ksp.gov.in" },
  { name: "DISTRICT CRIMINAL INVESTIGATION BRANCH POLICE INSPECTOR (PI DCIB)", office: "08156-277216", mobile: "9480802508", email: "dcibcbpura@ksp.gov.in" },
  { name: "RESERVE POLICE INSPECTOR IN DISTRICT ARMED RESERVE (RPI DAR)", office: "08156-273440", mobile: "9480802506", email: "darcbpura@ksp.gov.in" },
  { name: "RESERVE POLICE INSPECTOR IN MOTOR TRANSPORT OFFICER (RPI MTO)", office: "08156-273440", mobile: "9480802537", email: "" },
  { name: "HOME GUARD", office: "08156-277057", mobile: "", email: "" },
]

export default function StationContactsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredContacts = contactDetails.filter((contact) =>
    Object.values(contact).some((value) => value.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-100 to-white py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-900 mb-12">Station Contact Details</h1>
        </FadeIn>
        <FadeIn>
          <div className="mb-6 relative max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredContacts.map((contact, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-violet-900 mb-2">{contact.name}</h3>
                  <div className="space-y-1 text-sm">
                    {contact.office && (
                      <p>
                        <span className="font-semibold">Office:</span> {contact.office}
                      </p>
                    )}
                    {contact.mobile && (
                      <p>
                        <span className="font-semibold">Mobile:</span> {contact.mobile}
                      </p>
                    )}
                    {contact.email && (
                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                          {contact.email}
                        </a>
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
} 