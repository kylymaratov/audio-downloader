import { Readable } from "stream";
import { TAudio } from "@/types/audio";
import { TOutputFormats } from "@/types/options";
declare function getAudioStream(audio: TAudio, headers: any, outputFormat: TOutputFormats): Promise<Readable>;
export { getAudioStream };
