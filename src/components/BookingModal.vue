<template>
    <Teleport to="body">
        <div class="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
            style="background:rgba(0,0,0,0.85);backdrop-filter:blur(10px)"
            @click.self="$emit('close')">

            <div class="relative w-full max-w-md rounded-2xl overflow-hidden flex flex-col"
                style="background:#0d0d0d;border:1px solid rgba(255,255,255,0.1);box-shadow:0 32px 80px rgba(0,0,0,0.6);max-height:90vh">

                <!-- ── Success state ── -->
                <div v-if="success" class="p-10 text-center">
                    <div class="text-5xl mb-5">✅</div>
                    <h3 class="text-xl font-bold text-white mb-2">Booking confirmed!</h3>
                    <p class="text-sm text-white/40 mb-1">We'll be in touch at <span class="text-white/70">{{ form.email }}</span>.</p>
                    <p class="text-sm text-white/40 mb-8">{{ selectedDate }} · {{ selectedTime }} PST</p>
                    <button @click="$emit('close')"
                        class="px-8 py-3 rounded-full font-bold text-black text-sm bg-white hover:bg-white/90 transition-all">
                        Close
                    </button>
                </div>

                <template v-else>
                    <!-- ── Header ── -->
                    <div class="flex items-start justify-between px-5 pt-5 pb-4 flex-shrink-0"
                        style="border-bottom:1px solid rgba(255,255,255,0.06)">
                        <div>
                            <h2 class="text-base font-bold text-white">Book a free 30-min call</h2>
                            <p class="text-xs text-white/40 mt-0.5">Senior QodeShark engineer · All times in PST</p>
                        </div>
                        <button @click="$emit('close')"
                            class="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold ml-3">
                            ✕
                        </button>
                    </div>

                    <!-- ── Scrollable body ── -->
                    <div class="overflow-y-auto flex-1 px-5 py-4 space-y-5">

                        <!-- Date selection -->
                        <div>
                            <label class="block text-[10px] font-bold uppercase tracking-widest text-white/35 mb-2.5">
                                Select a date
                            </label>
                            <div class="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
                                <button v-for="d in availableDates" :key="d.iso"
                                    @click="selectedDate = d.iso; selectedTime = ''"
                                    class="flex-shrink-0 flex flex-col items-center w-14 py-2 rounded-xl text-xs font-semibold transition-all"
                                    :style="selectedDate === d.iso
                                        ? 'background:#fff;color:#000'
                                        : 'background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.55);border:1px solid rgba(255,255,255,0.08)'">
                                    <span class="text-[9px] uppercase tracking-wide opacity-70 mb-0.5">{{ d.day }}</span>
                                    <span class="text-base font-extrabold leading-none">{{ d.date }}</span>
                                    <span class="text-[9px] opacity-60 mt-0.5">{{ d.month }}</span>
                                </button>
                            </div>
                        </div>

                        <!-- Time slots -->
                        <div v-if="selectedDate">
                            <label class="block text-[10px] font-bold uppercase tracking-widest text-white/35 mb-2.5">
                                Select a time <span class="normal-case font-normal text-white/20">(PST)</span>
                            </label>
                            <div class="grid grid-cols-4 gap-1.5">
                                <button v-for="slot in timeSlots" :key="slot"
                                    @click="selectedTime = slot"
                                    class="py-2 rounded-lg text-[11px] font-semibold transition-all"
                                    :style="selectedTime === slot
                                        ? 'background:#fff;color:#000'
                                        : 'background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.55);border:1px solid rgba(255,255,255,0.07)'">
                                    {{ slot }}
                                </button>
                            </div>
                        </div>

                        <!-- Form fields -->
                        <template v-if="selectedDate && selectedTime">
                            <!-- Divider -->
                            <div style="height:1px;background:rgba(255,255,255,0.06)"></div>

                            <!-- Email -->
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-white/35 mb-1.5">
                                    Email <span class="text-red-400 normal-case font-normal">*</span>
                                </label>
                                <input v-model="form.email" type="email" placeholder="you@example.com" required
                                    class="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all"
                                    style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"
                                    @focus="e => e.target.style.borderColor='rgba(255,255,255,0.3)'"
                                    @blur="e => e.target.style.borderColor='rgba(255,255,255,0.1)'" />
                            </div>

                            <!-- Phone -->
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-white/35 mb-1.5">
                                    Phone <span class="normal-case font-normal text-white/20">(optional)</span>
                                </label>
                                <input v-model="form.phone" type="tel" placeholder="+1 (555) 000-0000"
                                    class="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all"
                                    style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"
                                    @focus="e => e.target.style.borderColor='rgba(255,255,255,0.3)'"
                                    @blur="e => e.target.style.borderColor='rgba(255,255,255,0.1)'" />
                            </div>

                            <!-- Service -->
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-white/35 mb-1.5">
                                    Service <span class="text-red-400 normal-case font-normal">*</span>
                                </label>
                                <select v-model="form.service" required
                                    class="w-full rounded-xl px-4 py-3 text-sm outline-none appearance-none cursor-pointer transition-all"
                                    style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.85)">
                                    <option value="" disabled style="background:#111;color:rgba(255,255,255,0.4)">Select a service…</option>
                                    <option v-for="s in services" :key="s" :value="s" style="background:#111;color:#fff">{{ s }}</option>
                                </select>
                            </div>

                            <!-- Notes -->
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-white/35 mb-1.5">
                                    Additional notes <span class="normal-case font-normal text-white/20">(optional)</span>
                                </label>
                                <textarea v-model="form.notes" rows="3"
                                    placeholder="Tell us about your project, what's broken, or where you're stuck…"
                                    class="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none resize-none transition-all"
                                    style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)"
                                    @focus="e => e.target.style.borderColor='rgba(255,255,255,0.3)'"
                                    @blur="e => e.target.style.borderColor='rgba(255,255,255,0.1)'" />
                            </div>

                            <!-- Error -->
                            <p v-if="error" class="text-red-400 text-xs text-center">{{ error }}</p>
                        </template>
                    </div>

                    <!-- ── Footer / Submit ── -->
                    <div v-if="selectedDate && selectedTime" class="px-5 pb-5 pt-3 flex-shrink-0"
                        style="border-top:1px solid rgba(255,255,255,0.06)">
                        <button @click="submit"
                            :disabled="!canSubmit || submitting"
                            class="w-full py-3.5 rounded-xl font-bold text-sm transition-all"
                            :style="canSubmit && !submitting
                                ? 'background:#fff;color:#000;cursor:pointer'
                                : 'background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.25);cursor:not-allowed'">
                            {{ submitting ? 'Sending…' : 'Confirm Booking' }}
                        </button>
                        <p class="text-center text-[10px] text-white/20 mt-2">No commitment. First session is free.</p>
                    </div>
                </template>

            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { ref, computed } from "vue"

defineEmits(["close"])

// ── Available dates: next 10 weekdays ──────────────────────────────────────
const availableDates = computed(() => {
    const dates = []
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const d = new Date()
    d.setDate(d.getDate() + 1) // start tomorrow
    while (dates.length < 10) {
        const dow = d.getDay()
        if (dow !== 0 && dow !== 6) {
            dates.push({
                iso: d.toISOString().split("T")[0],
                day: dayNames[dow],
                date: d.getDate(),
                month: monthNames[d.getMonth()],
            })
        }
        d.setDate(d.getDate() + 1)
    }
    return dates
})

// ── Time slots PST 7am – 4pm ───────────────────────────────────────────────
const timeSlots = [
    "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM",
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "1:00 PM",  "1:30 PM",  "2:00 PM",  "2:30 PM",
    "3:00 PM",  "3:30 PM",  "4:00 PM",
]

// ── Services ───────────────────────────────────────────────────────────────
const services = [
    "Technical Consultation",
    "Code Audit",
    "Auth Implementation",
    "API Implementation",
    "Code Optimization",
    "Complex Feature Building",
    "Payment Implementation",
    "Codebase Migration",
    "Database Migration",
    "Database Implementation",
    "Project Rebuild",
    "Customized Service",
]

// ── State ──────────────────────────────────────────────────────────────────
const selectedDate = ref("")
const selectedTime = ref("")
const form = ref({ email: "", phone: "", service: "", notes: "" })
const submitting = ref(false)
const success = ref(false)
const error = ref("")

const canSubmit = computed(() => form.value.email.trim() && form.value.service)

// ── Submit via Web3Forms ───────────────────────────────────────────────────
async function submit() {
    if (!canSubmit.value || submitting.value) return
    submitting.value = true
    error.value = ""
    try {
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
                subject: `New Booking — ${form.value.service} on ${selectedDate.value} at ${selectedTime.value} PST`,
                from_name: "QodeShark Booking",
                reply_to: form.value.email,
                Email: form.value.email,
                Phone: form.value.phone || "Not provided",
                Service: form.value.service,
                Date: selectedDate.value,
                Time: `${selectedTime.value} PST`,
                Notes: form.value.notes || "None",
            }),
        })
        const data = await res.json()
        if (data.success) {
            success.value = true
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
