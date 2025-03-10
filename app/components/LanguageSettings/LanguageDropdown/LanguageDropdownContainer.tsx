import * as React from "react";
import { useState } from "react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useAtom } from "jotai";
import { LanguageAtom } from "@/utils/atom";
import { LanguageList } from "./languageList";

export default function LanguageDropdownContainer() {

    const [selectLangValue, setSelectLangValue] = useAtom(LanguageAtom)

    return (
        <>
            <div
                className="sm:w-full">
                <Select onValueChange={setSelectLangValue}>
                    <SelectTrigger className="border-none hover:bg-[#e4e3e0] text-sm w-[140px]">  {/* Definindo largura fixa */}
                        <SelectValue placeholder={LanguageList[selectLangValue]} />
                    </SelectTrigger>
                    <SelectContent className="bg-[#f6f5f1] border-slate-100 text-slate-800">
                        <SelectGroup className="bg-[#f6f5f1] border-slate-100">
                            <SelectItem value="pt">Português</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

            </div>
        </>
    );
}
