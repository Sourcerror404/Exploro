// ==========================================
// SUPABASE CLIENT INITIALIZATION
// ==========================================
// 1. You must include the Supabase CDN in your HTML before this file:
//    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
// 2. Replace these with your actual Supabase project URL and anon key

const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE';

let supabase = null;
try {
    if (window.supabase && SUPABASE_URL !== 'YOUR_SUPABASE_URL_HERE') {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
} catch (err) {
    console.warn('Supabase init skipped:', err);
}

// ==========================================
// API SERVICE FUNCTIONS
// ==========================================

const api = {
    /**
     * Checks if Supabase is properly configured
     */
    isConfigured: () => {
        return supabase !== null && SUPABASE_URL !== 'YOUR_SUPABASE_URL_HERE';
    },

    /**
     * Get all places from the database
     */
    getPlaces: async () => {
        if (!api.isConfigured()) return []; // Fallback to mock data if not configured
        
        const { data, error } = await supabase
            .from('places')
            .select('*')
            .eq('is_active', true)
            .order('name');
            
        if (error) {
            console.error('Error fetching places:', error);
            return [];
        }
        return data;
    },

    /**
     * Submit a new photo snap to the database
     */
    submitSnap: async (userId, placeId, imageUrl, caption, lat, lng) => {
        if (!api.isConfigured()) return true; // Pretend it worked for UI flow
        
        const { data, error } = await supabase
            .from('snaps')
            .insert([
                { 
                    user_id: userId, 
                    place_id: placeId, 
                    image_url: imageUrl, 
                    caption: caption,
                    latitude: lat,
                    longitude: lng,
                    status: 'pending' 
                }
            ]);
            
        if (error) {
            console.error('Error submitting snap:', error);
            return false;
        }
        return true;
    },

    /**
     * Fetch approved snaps for the global feed
     */
    getFeedSnaps: async () => {
        if (!api.isConfigured()) return [];
        
        const { data, error } = await supabase
            .from('snaps')
            .select('*, profiles(username, avatar_url), places(name)')
            .eq('status', 'approved')
            .order('created_at', { ascending: false });
            
        if (error) {
            console.error('Error fetching feed:', error);
            return [];
        }
        return data;
    },

    /**
     * Admin action: Approve or reject a snap
     */
    moderateSnap: async (adminId, snapId, action) => {
        if (!api.isConfigured()) return true;
        
        const status = action === 'approve' ? 'approved' : 'rejected';
        const { data, error } = await supabase
            .from('snaps')
            .update({ 
                status: status,
                reviewed_by: adminId,
                reviewed_at: new Date().toISOString()
            })
            .eq('id', snapId);
            
        if (error) {
            console.error('Error moderating snap:', error);
            return false;
        }
        return true;
    },

    /**
     * Business action: Submit a new campaign
     */
    submitCampaign: async (businessId, title, desc, xpReward) => {
        if (!api.isConfigured()) return true;
        
        const { data, error } = await supabase
            .from('challenges')
            .insert([
                {
                    business_id: businessId,
                    title: title,
                    description: desc,
                    xp_reward: xpReward,
                    status: 'active'
                }
            ]);
            
        if (error) {
            console.error('Error creating campaign:', error);
            return false;
        }
        return true;
    }
};

// Make api globally available
window.exploroApi = api;
