<template>
    <Teleport to="body">
        <div class="fixed inset-0 z-[100] flex items-center justify-center px-4"
            style="background:rgba(0,0,0,0.75)"
            @click.self="$emit('close')">

            <div class="relative w-full max-w-lg rounded-2xl overflow-hidden"
                style="background:#111;border:1px solid rgba(255,255,255,0.1);box-shadow:0 24px 60px rgba(0,0,0,0.7)">

                <!-- ── Header ── -->
                <div class="flex items-center justify-between px-5 py-3 md:px-7 md:py-5"
                    style="border-bottom:1px solid rgba(255,255,255,0.07)">
                    <div>
                        <h2 class="text-sm md:text-base font-bold text-white">Book a free 30-min call</h2>
                        <p class="text-[11px] md:text-xs text-white/55 mt-0.5">Senior QodeShark engineer</p>
                    </div>
                    <button @click="$emit('close')"
                        class="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors text-xs md:text-sm font-bold">
                        ✕
                    </button>
                </div>

                <!-- ── Booking form ── -->
                <template v-if="step === 'form'">
                    <div class="px-5 py-3 space-y-2.5 md:px-7 md:py-5 md:space-y-4">

                        <!-- Date with week navigation -->
                        <div>
                            <div class="flex items-center justify-between mb-1.5 md:mb-2.5">
                                <label class="text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-white/60">Select a date</label>
                                <div class="flex items-center gap-1 md:gap-1.5">
                                    <button @click="prevWeek" :disabled="!canGoPrev"
                                        class="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-md text-xs md:text-sm font-bold transition-all"
                                        :style="canGoPrev ? 'color:rgba(255,255,255,0.6);background:rgba(255,255,255,0.07);cursor:pointer' : 'color:rgba(255,255,255,0.15);background:rgba(255,255,255,0.03);cursor:not-allowed'">‹</button>
                                    <button @click="nextWeek" :disabled="!canGoNext"
                                        class="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-md text-xs md:text-sm font-bold transition-all"
                                        :style="canGoNext ? 'color:rgba(255,255,255,0.6);background:rgba(255,255,255,0.07);cursor:pointer' : 'color:rgba(255,255,255,0.15);background:rgba(255,255,255,0.03);cursor:not-allowed'">›</button>
                                </div>
                            </div>
                            <div class="grid grid-cols-5 gap-1.5 md:gap-2">
                                <button v-for="d in weekDates" :key="d.iso"
                                    @click="!d.isPast && (selectedDate = d.iso, selectedTime = '')"
                                    class="flex flex-col items-center py-1.5 md:py-2.5 rounded-lg font-semibold transition-all"
                                    :style="d.isPast
                                        ? 'background:rgba(255,255,255,0.02);color:rgba(255,255,255,0.15);cursor:not-allowed;border:1px solid rgba(255,255,255,0.04)'
                                        : selectedDate === d.iso
                                            ? 'background:#fff;color:#000'
                                            : 'background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.75);border:1px solid rgba(255,255,255,0.15);cursor:pointer'">
                                    <span class="text-[8px] md:text-[10px] uppercase tracking-wide opacity-70">{{ d.day }}</span>
                                    <span class="text-sm md:text-base font-extrabold leading-none">{{ d.date }}</span>
                                    <span class="text-[8px] md:text-[10px] opacity-50">{{ d.month }}</span>
                                </button>
                            </div>
                        </div>

                        <!-- Time -->
                        <div>
                            <label class="block text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1.5 md:mb-2.5">
                                Select a time <span class="normal-case font-normal text-white/45">(Pacific Time · California, USA)</span>
                            </label>
                            <div class="grid grid-cols-4 gap-1 md:gap-1.5">
                                <button v-for="(slot, idx) in timeSlots" :key="slot"
                                    @click="!isUnavailable(selectedDate, idx) && selectedDate && (selectedTime = slot)"
                                    :disabled="!selectedDate || isUnavailable(selectedDate, idx)"
                                    class="py-1.5 md:py-2 rounded-lg text-[10px] md:text-xs font-semibold transition-all relative"
                                    :style="selectedTime === slot
                                        ? 'background:#fff;color:#000'
                                        : !selectedDate
                                            ? 'background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.04);cursor:not-allowed'
                                            : isUnavailable(selectedDate, idx)
                                                ? 'background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.05);cursor:not-allowed;text-decoration:line-through'
                                                : 'background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.75);border:1px solid rgba(255,255,255,0.15)'">
                                    {{ slot }}
                                </button>
                            </div>
                        </div>

                        <!-- Divider -->
                        <div style="height:1px;background:rgba(255,255,255,0.06)"></div>

                        <!-- Email -->
                        <div>
                            <label class="block text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1 md:mb-1.5">
                                Email <span class="text-red-400 normal-case font-normal">*</span>
                            </label>
                            <div class="relative">
                                <input v-model="form.email" type="email" placeholder="you@example.com" required
                                    class="w-full rounded-xl px-3.5 py-1.5 md:px-4 md:py-2.5 text-xs md:text-sm text-white placeholder-white/35 outline-none transition-all pr-8 md:pr-9"
                                    :style="`background:rgba(255,255,255,0.08);border:1px solid ${emailTouched && !emailValid ? 'rgba(248,113,113,0.6)' : emailVerified ? 'rgba(74,222,128,0.5)' : 'rgba(255,255,255,0.2)'}`"
                                    :disabled="emailVerified"
                                    @focus="e => e.target.style.borderColor='rgba(255,255,255,0.3)'"
                                    @blur="onEmailBlur"
                                    @input="onEmailInput" />
                                <div v-if="emailVerified" class="absolute right-3 top-1/2 -translate-y-1/2">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(74,222,128,1)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <div v-else-if="otpSending" class="absolute right-3 top-1/2 -translate-y-1/2">
                                    <svg class="animate-spin" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2.5">
                                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                                    </svg>
                                </div>
                            </div>
                            <p v-if="emailTouched && !emailValid" class="text-red-400 text-[10px] md:text-xs mt-0.5 md:mt-1">Enter a valid email address</p>
                            <p v-else-if="emailVerified" class="text-green-400 text-[10px] md:text-xs mt-0.5 md:mt-1">Email verified ✓</p>
                            <p v-else-if="otpSent && !emailVerified" class="text-white/40 text-[10px] md:text-xs mt-0.5 md:mt-1">
                                Code sent ·
                                <button @click="resetEmail" class="text-white/60 hover:text-white underline transition-colors">wrong email?</button>
                            </p>
                        </div>

                        <!-- Inline OTP input -->
                        <div v-if="otpSent && !emailVerified">
                            <label class="block text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1 md:mb-1.5">
                                Verification code <span class="text-red-400 normal-case font-normal">*</span>
                            </label>
                            <div class="flex gap-2">
                                <input v-model="otpInput" type="text" inputmode="numeric" maxlength="6"
                                    placeholder="000000" autofocus
                                    class="w-[96px] md:w-[108px] rounded-xl px-2 md:px-3 py-1.5 md:py-2.5 text-xs md:text-sm text-white placeholder-white/35 outline-none transition-all tracking-widest font-bold text-center"
                                    :style="`background:rgba(255,255,255,0.08);border:1px solid ${otpError ? 'rgba(248,113,113,0.6)' : 'rgba(255,255,255,0.2)'}`"
                                    @focus="e => e.target.style.borderColor='rgba(255,255,255,0.3)'"
                                    @blur="e => e.target.style.borderColor = otpError ? 'rgba(248,113,113,0.6)' : 'rgba(255,255,255,0.2)'"
                                    @input="otpInput = otpInput.replace(/\D/g, ''); if(otpInput.length === 6) verifyOtp()" />
                                <button @click="resendOtp" :disabled="resendCooldown > 0"
                                    class="w-16 md:w-20 flex-shrink-0 rounded-xl text-xs md:text-sm font-bold transition-all text-center"
                                    :style="resendCooldown > 0
                                        ? 'background:rgba(255,255,255,0.06);color:rgba(255,255,255,1);cursor:not-allowed'
                                        : 'background:rgba(255,255,255,0.12);color:rgba(255,255,255,0.85);cursor:pointer'">
                                    {{ resendCooldown > 0 ? `${resendCooldown}s` : 'Resend' }}
                                </button>
                            </div>
                            <p v-if="otpError" class="text-red-400 text-[10px] md:text-xs mt-0.5 md:mt-1">{{ otpError }}</p>
                        </div>

                        <!-- Phone -->
                        <div>
                            <label class="block text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1 md:mb-1.5">
                                Phone <span class="normal-case font-normal text-white/45">(optional)</span>
                            </label>
                            <input v-model="form.phone" type="tel" placeholder="+1 (555) 000-0000"
                                class="w-full rounded-xl px-3.5 py-1.5 md:px-4 md:py-2.5 text-xs md:text-sm text-white placeholder-white/35 outline-none transition-all"
                                :style="`background:rgba(255,255,255,0.08);border:1px solid ${phoneTouched && !phoneValid ? 'rgba(248,113,113,0.6)' : 'rgba(255,255,255,0.2)'}`"
                                @focus="e => e.target.style.borderColor='rgba(255,255,255,0.3)'"
                                @blur="phoneTouched = true; $event.target.style.borderColor = phoneTouched && !phoneValid ? 'rgba(248,113,113,0.6)' : 'rgba(255,255,255,0.1)'" />
                            <p v-if="phoneTouched && !phoneValid" class="text-red-400 text-[10px] md:text-xs mt-0.5 md:mt-1">Enter a valid phone number</p>
                        </div>

                        <!-- Service -->
                        <div>
                            <label class="block text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1 md:mb-1.5">
                                Service <span class="text-red-400 normal-case font-normal">*</span>
                            </label>
                            <select v-model="form.service" required
                                class="w-full rounded-xl px-3.5 py-1.5 md:px-4 md:py-2.5 text-xs md:text-sm outline-none appearance-none cursor-pointer transition-all"
                                style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2);color:rgba(255,255,255,0.9)">
                                <option value="" disabled style="background:#111;color:rgba(255,255,255,0.4)">Select a service…</option>
                                <option v-for="s in services" :key="s" :value="s" style="background:#111;color:#fff">{{ s }}</option>
                            </select>
                        </div>

                        <!-- Notes -->
                        <div>
                            <label class="block text-[9px] md:text-[11px] font-bold uppercase tracking-widest text-white/60 mb-1 md:mb-1.5">
                                Additional notes <span class="normal-case font-normal text-white/45">(optional)</span>
                            </label>
                            <textarea v-model="form.notes" rows="2"
                                placeholder="Tell us about your project or where you're stuck…"
                                class="w-full rounded-xl px-3.5 py-1.5 md:px-4 md:py-2.5 text-xs md:text-sm text-white placeholder-white/35 outline-none resize-none transition-all"
                                style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.2)"
                                @focus="e => e.target.style.borderColor='rgba(255,255,255,0.3)'"
                                @blur="e => e.target.style.borderColor='rgba(255,255,255,0.1)'" />
                        </div>

                        <p v-if="error" class="text-red-400 text-xs text-center">{{ error }}</p>
                    </div>

                    <div class="px-5 pb-4 pt-1 md:px-7 md:pb-6">
                        <button @click="submitBooking"
                            :disabled="!canSubmit || submitting"
                            class="w-full py-2.5 md:py-3.5 rounded-xl font-bold text-sm md:text-base transition-all"
                            :style="canSubmit && !submitting
                                ? 'background:#fff;color:#000;cursor:pointer'
                                : 'background:rgba(255,255,255,0.07);color:rgba(255,255,255,0.2);cursor:not-allowed'">
                            {{ submitting ? 'Confirming…' : 'Confirm Booking' }}
                        </button>
                        <p class="text-center text-[10px] md:text-xs text-white/20 mt-1.5 md:mt-2">No commitment · First session is free</p>
                    </div>
                </template>

                <!-- ── Success ── -->
                <template v-else-if="step === 'success'">
                    <div class="p-10 text-center">
                        <div class="flex items-center justify-center w-20 h-20 rounded-full mx-auto mb-5"
                            style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2)">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-1.5">Booking confirmed!</h3>
                        <p class="text-sm text-white/40 mb-1">We'll be in touch at <span class="text-white/70">{{ form.email }}</span>.</p>
                        <p class="text-sm text-white/30 mb-8">{{ selectedDate }} · {{ selectedTime }} Pacific Time (California, USA)</p>
                        <button @click="$emit('close')"
                            class="px-8 py-3 rounded-full font-bold text-black text-base bg-white hover:bg-white/90 transition-all">
                            Close
                        </button>
                    </div>
                </template>

            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { ref, computed, onUnmounted } from "vue"
import emailjs from "@emailjs/browser"

defineEmits(["close"])

const EMAILJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// ── Step ───────────────────────────────────────────────────────────────────
const step = ref("form")

// ── Week navigation ────────────────────────────────────────────────────────
const weekOffset = ref(0)
const MAX_WEEKS = 4

const weekDates = computed(() => {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    const dow = today.getDay()
    const daysToMonday = dow === 0 ? -6 : 1 - dow
    const baseMonday = new Date(today)
    baseMonday.setDate(today.getDate() + daysToMonday)
    const weekStart = new Date(baseMonday)
    weekStart.setDate(baseMonday.getDate() + weekOffset.value * 7)
    const dates = []
    for (let i = 0; i < 5; i++) {
        const d = new Date(weekStart)
        d.setDate(weekStart.getDate() + i)
        dates.push({
            iso: d.toISOString().split("T")[0],
            day: dayNames[d.getDay()],
            date: d.getDate(),
            month: monthNames[d.getMonth()],
            isPast: d < tomorrow,
        })
    }
    return dates
})

const canGoPrev = computed(() => weekOffset.value > 0)
const canGoNext = computed(() => weekOffset.value < MAX_WEEKS)
function prevWeek() { if (canGoPrev.value) { weekOffset.value--; selectedDate.value = ""; selectedTime.value = "" } }
function nextWeek() { if (canGoNext.value) { weekOffset.value++; selectedDate.value = ""; selectedTime.value = "" } }

// ── Seeded RNG for consistent per-day unavailability ──────────────────────
function seededRng(seed) {
    let h = 2166136261
    for (let i = 0; i < seed.length; i++) {
        h ^= seed.charCodeAt(i)
        h = Math.imul(h, 16777619) >>> 0
    }
    return function () {
        h ^= h << 13; h ^= h >> 17; h ^= h << 5
        return (h >>> 0) / 4294967296
    }
}

const unavailableCache = {}
function getUnavailableSet(dateIso) {
    if (!dateIso) return new Set()
    if (unavailableCache[dateIso]) return unavailableCache[dateIso]
    const rng = seededRng(dateIso)
    const count = 3 + Math.floor(rng() * 6) // 3–8 slots
    const total = 19 // number of time slots
    const indices = new Set()
    while (indices.size < count) {
        indices.add(Math.floor(rng() * total))
    }
    unavailableCache[dateIso] = indices
    return indices
}

function isUnavailable(dateIso, idx) {
    return getUnavailableSet(dateIso).has(idx)
}

// ── Time slots 7am–4pm PST ─────────────────────────────────────────────────
const timeSlots = [
    "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM",  "1:30 PM",  "2:00 PM",  "2:30 PM",
    "3:00 PM",  "3:30 PM",  "4:00 PM",
]

// ── Services ───────────────────────────────────────────────────────────────
const services = [
    "Technical Consultation", "Code Audit", "Auth Implementation",
    "API Implementation", "Code Optimization", "Complex Feature Building",
    "Payment Implementation", "Codebase Migration", "Database Migration",
    "Database Implementation", "Project Rebuild", "Customized Service",
]

// ── Form state ─────────────────────────────────────────────────────────────
const selectedDate = ref("")
const selectedTime = ref("")
const form = ref({ email: "", phone: "", service: "", notes: "" })
const submitting = ref(false)
const error = ref("")

// ── Validation ─────────────────────────────────────────────────────────────
const emailTouched = ref(false)
const phoneTouched = ref(false)
const emailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email.trim()))
const phoneValid = computed(() => {
    if (!form.value.phone.trim()) return true
    const digits = form.value.phone.replace(/\D/g, "")
    return digits.length >= 7 && digits.length <= 15
})

// ── OTP state ──────────────────────────────────────────────────────────────
const generatedOtp  = ref("")
const otpInput      = ref("")
const otpError      = ref("")
const otpSent       = ref(false)
const otpSending    = ref(false)
const emailVerified = ref(false)
const resendCooldown = ref(0)
let cooldownTimer = null

const canSubmit = computed(() =>
    selectedDate.value && selectedTime.value &&
    emailValid.value && emailVerified.value &&
    phoneValid.value && form.value.service
)

function startCooldown() {
    resendCooldown.value = 60
    clearInterval(cooldownTimer)
    cooldownTimer = setInterval(() => {
        resendCooldown.value--
        if (resendCooldown.value <= 0) clearInterval(cooldownTimer)
    }, 1000)
}

onUnmounted(() => clearInterval(cooldownTimer))

// ── Email field handlers ───────────────────────────────────────────────────
function onEmailInput() {
    // If user edits email after OTP was sent, reset verification
    if (otpSent.value) {
        otpSent.value = false
        emailVerified.value = false
        otpInput.value = ""
        otpError.value = ""
        clearInterval(cooldownTimer)
        resendCooldown.value = 0
    }
}

async function onEmailBlur() {
    emailTouched.value = true
    if (!emailValid.value || otpSent.value || emailVerified.value) return
    await sendOtp()
}

function resetEmail() {
    emailVerified.value = false
    otpSent.value = false
    otpInput.value = ""
    otpError.value = ""
    clearInterval(cooldownTimer)
    resendCooldown.value = 0
}

// ── Send OTP via EmailJS ───────────────────────────────────────────────────
async function sendOtp() {
    generatedOtp.value = String(Math.floor(100000 + Math.random() * 900000))
    otpSending.value = true
    error.value = ""
    try {
        await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
            to_email: form.value.email,
            otp_code: generatedOtp.value,
        }, EMAILJS_KEY)
        otpSent.value = true
        otpInput.value = ""
        otpError.value = ""
        startCooldown()
    } catch {
        error.value = "Failed to send verification code. Please try again."
    } finally {
        otpSending.value = false
    }
}

async function resendOtp() {
    if (resendCooldown.value > 0) return
    await sendOtp()
}

// ── Verify OTP ─────────────────────────────────────────────────────────────
function verifyOtp() {
    if (otpInput.value !== generatedOtp.value) {
        otpError.value = "Incorrect code. Please try again."
        return
    }
    emailVerified.value = true
    otpSent.value = false
    otpError.value = ""
}

// ── Submit booking via Web3Forms ───────────────────────────────────────────
async function submitBooking() {
    phoneTouched.value = true
    if (!canSubmit.value || submitting.value) return
    submitting.value = true
    error.value = ""
    try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                subject: `New Booking — ${form.value.service} on ${selectedDate.value} at ${selectedTime.value} PT`,
                from_name: "QodeShark Booking",
                reply_to: form.value.email,
                Email: form.value.email,
                Phone: form.value.phone || "Not provided",
                Service: form.value.service,
                Date: selectedDate.value,
                Time: `${selectedTime.value} Pacific Time (California, USA)`,
                Notes: form.value.notes || "None",
            }),
        })
        const data = await res.json()
        if (data.success) {
            step.value = "success"
        } else {
            error.value = "Something went wrong. Please try again."
        }
    } catch {
        error.value = "Network error. Please try again."
    } finally {
        submitting.value = false
    }
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
